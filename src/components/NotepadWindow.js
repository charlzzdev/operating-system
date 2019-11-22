import React from 'react';
import dropIcon from '../functions/dropIcon';
import { Close } from '../icons';

const NotepadWindow = () => {
  return (
    <div className="NotepadWindow" onDragEnd={dropIcon}>
      <header className="WindowHeader">
        <span>Notepad</span>
        <button className="TaskbarIcon"><Close /></button>
      </header>
      <textarea></textarea>
    </div>
  )
}

export default NotepadWindow;