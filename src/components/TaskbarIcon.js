import React from 'react';

const TaskbarIcon = ({ id, width, onClick, children }) => {
  return (
    <button
      className={`TaskbarIcon icon-${id}`}
      style={{ width }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TaskbarIcon;
