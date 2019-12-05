import React from 'react';
import { ChevronRight } from '../icons';

const ContextMenu = ({ state }) => {
  return (
    <ul className="ContextMenu" style={{ left: state.coords.x, top: state.coords.y }}>
      {
        state.type === 'open_default' && <>
          <li onClick={() => window.location.reload()}>Reload</li>
          <li>Set wallpaper</li>
          <li>New <ChevronRight /></li>
        </>
      }
      {
        state.type === 'open_file' && <>
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