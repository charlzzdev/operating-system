import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import { Notepad } from './icons';
import NotepadWindow from './components/NotepadWindow';

function App() {
  const [desktopWindows, setDesktopWindows] = useState([]);

  return (
    <div className="App">
      {
        desktopWindows.map(w => w)
      }
      <DesktopIcon
        icon={<Notepad />}
        title="Notepad"
        onDoubleClick={() => setDesktopWindows([
          ...desktopWindows,
          <NotepadWindow key={uuidv4()} />
        ])}
      />
      <Taskbar />
    </div>
  );
}

export default App;
