import React, { useState, useEffect, useRef } from 'react';
import dropIcon from '../functions/dropIcon';
import { Close, Maximize, Minus } from '../icons';
import windowStore from '../stores/windowStore';
import SaveDialog from './SaveDialog';

const NotepadWindow = ({ id, content, files, setFiles }) => {
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

  const saveTxt = (fileName) => {
    setFiles([...files, { name: fileName, content: textarea.current.value }]);
    setShowSaveDialog(false);
  }

  return (
    <div className="NotepadWindow" id={id} onDragEnd={dropIcon}>
      <header className="WindowHeader">
        <span>Notepad</span>
        <div className="WindowHeaderIcons">
          <button className="TaskbarIcon" onClick={() => document.querySelector(`.icon-${id}`).click()}><Minus /></button>
          <button
            className="TaskbarIcon"
            onClick={() => document.getElementById(id).style = "top: 47.5%; width: 100%; height: 100%;"}
          ><Maximize /></button>
          <button className="TaskbarIcon" onClick={() => windowStore.dispatch({ type: 'close', key: id })}><Close /></button>
        </div>
      </header>
      {showSaveDialog && <SaveDialog saveTxt={saveTxt} setShowSaveDialog={setShowSaveDialog} />}
      <textarea ref={textarea} defaultValue={typeof content === 'string' ? content : ''}></textarea>
    </div>
  )
}

export default NotepadWindow;