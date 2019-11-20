import React from 'react';

const TaskbarIcon = ({ width, onClick, children }) => {
  return (
    <button
      className="TaskbarIcon"
      style={{ width }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TaskbarIcon;
