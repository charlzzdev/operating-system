import React, { useState, useEffect } from 'react';
import uuidv4 from 'uuid/v4';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import { Notepad, TextFile } from './icons';
import NotepadWindow from './components/NotepadWindow';
import ContextMenu from './components/ContextMenu';
import windowStore from './stores/windowStore';
import fileStore from './stores/fileStore';

function App() {
  const [desktopWindows, setDesktopWindows] = useState([]);
  const [contextMenu, setContextMenu] = useState({ open: false, clientX: 0, clientY: 0 });
  const [files, setFiles] = useState([]);
  const [filesToRender, setFilesToRender] = useState([]);

  useEffect(() => {
    windowStore.subscribe(() => setDesktopWindows(windowStore.getState()));
    fileStore.subscribe(() => setFiles(fileStore.getState()));
  }, []);

  useEffect(() => {
    setFilesToRender(files.map(file => (
      <DesktopIcon
        key={uuidv4()}
        icon={<TextFile size={30} />}
        title={file.name + ".txt"}
        onDoubleClick={() => onDesktopIconDoubleClick(file.content)}
      />
    )));
    //eslint-disable-next-line
  }, [files]);

  const onDesktopIconDoubleClick = (content) => {
    let id = uuidv4();
    windowStore.dispatch({
      type: 'open',
      window: <NotepadWindow
        key={id}
        id={id}
        files={files}
        setFiles={setFiles}
        content={content}
      />
    })
  }

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
        onDoubleClick={onDesktopIconDoubleClick}
      />
      {
        filesToRender.map(file => file)
      }
      <Taskbar desktopWindows={desktopWindows} />
    </div>
  );
}

export default App;
