import React, { useState, useEffect, useRef } from 'react';
import dropIcon from '../functions/dropIcon';
import { Close, Maximize, Minus } from '../icons';
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

  return (
    <div
      className="NotepadWindow"
      id={id}
      onDragEnd={dropIcon}
      onContextMenu={e => contextMenuStore.dispatch({
        type: 'open_file',
        coords: { x: e.clientX, y: e.clientY },
        methods: {
          setShowSaveDialog,
          minimize,
          maximize,
          close
        }
      })}
    >
      <header className="WindowHeader">
        <span>{title}</span>
        <div className="WindowHeaderIcons">
          <button className="TaskbarIcon" onClick={minimize}><Minus /></button>
          <button className="TaskbarIcon" onClick={maximize}><Maximize /></button>
          <button className="TaskbarIcon" onClick={close}><Close /></button>
        </div>
      </header>
      {showSaveDialog && <SaveDialog text={textarea.current.value} setShowSaveDialog={setShowSaveDialog} />}
      <textarea ref={textarea} defaultValue={typeof content === 'string' ? content : ''}></textarea>
    </div>
  )
}

export default NotepadWindow;