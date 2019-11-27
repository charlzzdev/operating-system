import React, { useState, useEffect } from 'react';
import TaskbarIcon from './TaskbarIcon';
import { Monitor, Search, TextFile } from '../icons';

const Taskbar = ({ desktopWindows }) => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleString()), 1000);
  }, []);

  return (
    <footer className="Taskbar">
      <div className="TaskbarIconContainer">
        <TaskbarIcon width="3rem" onClick={() => null}>
          <Monitor />
        </TaskbarIcon>
        <TaskbarIcon width="3rem" onClick={() => null}>
          <Search />
        </TaskbarIcon>
        {
          desktopWindows.map(({ key }) => (
            <TaskbarIcon
              width="3rem"
              onClick={() => {
                const keyClassList = document.getElementById(key).classList;
                keyClassList.contains('closed') ? keyClassList.remove('closed') : keyClassList.add('closed');
              }}
              key={key}
              id={key}
            >
              <TextFile />
            </TaskbarIcon>
          ))
        }
      </div>
      <TaskbarIcon width="7rem">
        {time}
      </TaskbarIcon>
    </footer>
  )
}

export default Taskbar;