import React from 'react';
import dropIcon from '../functions/dropIcon';
import { Close } from '../icons';

const NotepadWindow = ({ id }) => {
  return (
    <div className="NotepadWindow" id={id} onDragEnd={dropIcon}>
      <header className="WindowHeader">
        <span>Notepad</span>
        <button className="TaskbarIcon"><Close /></button>
      </header>
      <textarea></textarea>
    </div>
  )
}

export default NotepadWindow;