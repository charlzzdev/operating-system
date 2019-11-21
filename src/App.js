import React from 'react';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import { Notepad } from './icons';

function App() {
  return (
    <div className="App">
      <DesktopIcon icon={<Notepad />} title="Notepad" onDoubleClick={() => null} />
      <Taskbar />
    </div>
  );
}

export default App;
