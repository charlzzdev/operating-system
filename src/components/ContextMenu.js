import React from 'react';
import { ChevronRight } from '../icons';
import uuidv4 from 'uuid/v4';
import windowStore from '../stores/windowStore';
import NotepadWindow from './NotepadWindow';

const ContextMenu = ({ state }) => {
  return (
    <ul className="ContextMenu" style={{ left: state.coords.x, top: state.coords.y }}>
      {
        state.type === 'context_default' && <>
          <li onClick={() => window.location.reload()}>Reload</li>
          <li>Set wallpaper</li>
          <li>
            New <ChevronRight />
            <ul className="submenu">
              <li onClick={() => {
                const id = uuidv4();
                windowStore.dispatch({
                  type: 'open',
                  window: <NotepadWindow
                    key={id}
                    id={id}
                    title="Notepad"
                  />
                });
              }}>Text file</li>
            </ul>
          </li>
        </>
      }
      {
        state.type === 'context_file' && <>
          <li onClick={() => state.methods.setShowSaveDialog(true)}>Save</li>
          <li onClick={state.methods.minimize}>Minimize</li>
          <li onClick={state.methods.maximize}>Maximize</li>
          <li onClick={state.methods.close}>Close</li>
        </>
      }
    </ul>
  )
}

export default ContextMenu;