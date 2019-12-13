import React, { useState, useEffect } from 'react';
import uuidv4 from 'uuid/v4';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import { Notepad, TextFile } from './icons';
import NotepadWindow from './components/NotepadWindow';
import ContextMenu from './components/ContextMenu';
import windowStore from './stores/windowStore';
import fileStore from './stores/fileStore';
import contextMenuStore from './stores/contextMenuStore';
import onDesktopIconDoubleClick from './functions/onDesktopIconDoubleClick';

function App() {
  const [desktopWindows, setDesktopWindows] = useState([]);
  const [contextMenu, setContextMenu] = useState({ open: false, clientX: 0, clientY: 0 });
  const [files, setFiles] = useState([]);
  const [filesToRender, setFilesToRender] = useState([]);

  useEffect(() => {
    windowStore.subscribe(() => setDesktopWindows(windowStore.getState()));
    fileStore.subscribe(() => setFiles(fileStore.getState()));
    contextMenuStore.subscribe(() => setContextMenu(contextMenuStore.getState()));
  }, []);

  useEffect(() => {
    setFilesToRender(files.map(file => (
      <DesktopIcon
        key={uuidv4()}
        icon={<TextFile size={30} />}
        title={file.name + ".txt"}
        onDoubleClick={() => onDesktopIconDoubleClick({
          DesktopWindow: NotepadWindow,
          ext: 'txt',
          content: file.content,
          files
        })}
      />
    )));
    //eslint-disable-next-line
  }, [files]);

  return (
    <div
      className="App"
      onContextMenu={e => e.target.className === 'App' && contextMenuStore.dispatch({
        type: 'context_default',
        coords: { x: e.clientX, y: e.clientY }
      })}
      onClick={() => contextMenuStore.dispatch({ type: 'close' })}
    >
      {
        contextMenu.open && <ContextMenu state={contextMenu} />
      }
      {
        desktopWindows.map(w => w)
      }
      <DesktopIcon
        icon={<Notepad />}
        title="Notepad"
        onDoubleClick={() => onDesktopIconDoubleClick({
          DesktopWindow: NotepadWindow,
          ext: 'txt',
          content: '',
          files
        })}
      />
      {
        filesToRender.map(file => file)
      }
      <Taskbar desktopWindows={desktopWindows} />
    </div>
  );
}

export default App;
