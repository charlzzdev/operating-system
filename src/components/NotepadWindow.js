import React, { useState, useEffect, useRef } from 'react';
import dropIcon from '../functions/dropIcon';
import { Close, Maximize, Minus, MoreHorizontal } from '../icons';
import windowStore from '../stores/windowStore';
import SaveDialog from './SaveDialog';
import contextMenuStore from '../stores/contextMenuStore';

const NotepadWindow = ({ id, content, title }) => {
  const textarea = useRef(null);
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  useEffect(() => {
    textarea.current.addEventListener('keydown', e => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        setShowSaveDialog(true);
      }
    });
  }, [setShowSaveDialog]);

  const minimize = () => document.querySelector(`.icon-${id}`).click();
  const maximize = () => document.getElementById(id).style = "top: 47.5%; width: 100%; height: 100%;";
  const close = () => windowStore.dispatch({ type: 'close', key: id });
  const openContextMenu = (x, y) => {
    setTimeout(() => contextMenuStore.dispatch({
      type: 'context_file',
      coords: { x, y },
      methods: {
        setShowSaveDialog,
        minimize,
        maximize,
        close
      }
    }), 0);
  }
  const increaseZIndex = () => windowStore.dispatch({ type: 'increaseZIndex', id });

  return (
    <div
      className="NotepadWindow"
      draggable="true"
      id={id}
      onClick={increaseZIndex}
      onDragEnd={e => { dropIcon(e); increaseZIndex(); }}
      onContextMenu={e => openContextMenu(e.clientX, e.clientY)}
    >
      <header className="WindowHeader">
        <button
          className="WindowHeaderTitle TaskbarIcon"
          onClick={e => openContextMenu(e.clientX, e.clientY)}
        ><MoreHorizontal />{title}</button>
        <div className="WindowHeaderIcons">
          <button className="TaskbarIcon" onClick={minimize}><Minus /></button>
          <button className="TaskbarIcon" onClick={maximize}><Maximize /></button>
          <button className="TaskbarIcon" onClick={close}><Close /></button>
        </div>
      </header>
      {
        showSaveDialog && <SaveDialog
          title={title}
          textarea={textarea}
          setShowSaveDialog={setShowSaveDialog}
        />
      }
      <textarea
        className="not-draggable"
        ref={textarea}
        defaultValue={typeof content === 'string' ? content : ''}
      ></textarea>
    </div>
  )
}

export default NotepadWindow;