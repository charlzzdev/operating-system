import React from 'react';

interface TaskbarIconProps {
  id?: string,
  width: string,
  onClick?: () => void,
  children: object
}

const TaskbarIcon = ({ id, width, onClick, children }: TaskbarIconProps) => {
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
