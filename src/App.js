import React, { useState, useEffect } from 'react';
import uuidv4 from 'uuid/v4';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import { Notepad } from './icons';
import NotepadWindow from './components/NotepadWindow';
import ContextMenu from './components/ContextMenu';
import windowStore from './stores/windowStore';

function App() {
  const [desktopWindows, setDesktopWindows] = useState([]);
  const [contextMenu, setContextMenu] = useState({ open: false, clientX: 0, clientY: 0 });

  useEffect(() => {
    windowStore.subscribe(() => {
      setDesktopWindows(windowStore.getState());
    });
  }, []);

  return (
    <div
      className="App"
      onContextMenu={e => setContextMenu({ open: true, clientX: e.clientX, clientY: e.clientY })}
      onClick={() => setContextMenu({ open: false })}
    >
      {
        contextMenu.open && <ContextMenu left={contextMenu.clientX} top={contextMenu.clientY} />
      }

      {
        desktopWindows.map(w => w)
      }
      <DesktopIcon
        icon={<Notepad />}
        title="Notepad"
        onDoubleClick={() => {
          let id = uuidv4();
          windowStore.dispatch({ type: 'open', window: <NotepadWindow key={id} id={id} /> });
        }}
      />
      <Taskbar desktopWindows={desktopWindows} />
    </div>
  );
}

export default App;
