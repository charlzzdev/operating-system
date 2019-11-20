import React, { useState, useEffect } from 'react';
import TaskbarIcon from './TaskbarIcon';
import { Monitor, Search } from '../icons';

const Taskbar = () => {
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
      </div>
      <TaskbarIcon width="7rem">
        {time}
      </TaskbarIcon>
    </footer>
  )
}

export default Taskbar;