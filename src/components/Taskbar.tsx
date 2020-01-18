import React, { useState, useEffect } from 'react';
import TaskbarIcon from './TaskbarIcon';
import { Monitor, Search, TextFile } from '../icons';

interface TaskbarProps {
  desktopWindows: object[]
}

const Taskbar = ({ desktopWindows }: TaskbarProps) => {
  const [time, setTime] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleString()), 1000);
  }, []);

  return (
    <footer className="Taskbar">
      <div className="TaskbarIconContainer">
        <TaskbarIcon width="3rem">
          <Monitor />
        </TaskbarIcon>
        <TaskbarIcon width="3rem">
          <Search />
        </TaskbarIcon>
        {
          desktopWindows.map(({ key }: any) => (
            <TaskbarIcon
              width="3rem"
              onClick={() => {
                const keyClassList: DOMTokenList = document.getElementById(key)!.classList;
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
        {[time]}
      </TaskbarIcon>
    </footer>
  )
}

export default Taskbar;