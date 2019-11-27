import React from 'react';
import dropIcon from '../functions/dropIcon';
import { Close, Maximize, Minus } from '../icons';
import windowStore from '../stores/windowStore';

const NotepadWindow = ({ id }) => {
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
      <textarea></textarea>
    </div>
  )
}

export default NotepadWindow;