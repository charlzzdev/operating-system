import React, { useState, useEffect } from 'react';
import uuidv4 from 'uuid/v4';

import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import { Notepad, TextFile } from './icons';
import NotepadWindow from './components/NotepadWindow';
import ContextMenu from './components/ContextMenu';
import RenameDialog from './components/RenameDialog';

import windowStore from './stores/windowStore';
import fileStore from './stores/fileStore';
import contextMenuStore from './stores/contextMenuStore';

import onDesktopIconDoubleClick from './functions/onDesktopIconDoubleClick';

function App() {
  const [desktopWindows, setDesktopWindows] = useState([]);
  const [contextMenu, setContextMenu] = useState({ open: false, clientX: 0, clientY: 0 });
  const [files, setFiles] = useState(JSON.parse(window.localStorage.getItem('files')) || []);
  const [filesToRender, setFilesToRender] = useState([]);
  const [renameDialog, setRenameDialog] = useState({ open: false, fileId: null });

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
        title={file.name}
        openRenameDialog={() => setRenameDialog({ open: true, fileId: file.id })}
        deleteFile={() => fileStore.dispatch({ type: 'delete', fileId: file.id })}
        style={file.style}
        onDoubleClick={() => onDesktopIconDoubleClick({
          DesktopWindow: NotepadWindow,
          ext: 'txt',
          content: file.content,
          fileId: file.id,
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
      {
        renameDialog.open && <RenameDialog
          fileId={renameDialog.fileId}
          setRenameDialog={setRenameDialog}
        />
      }
      <Taskbar desktopWindows={desktopWindows} />
    </div>
  );
}

export default App;
