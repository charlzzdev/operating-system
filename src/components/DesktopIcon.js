import React from 'react';

const DesktopIcon = ({ icon, title, onDoubleClick }) => {
  const dropIcon = e => {
    e.target.style.position = 'absolute';
    e.target.style.top = `${e.clientY - (e.target.clientHeight / 2)}px`;
    e.target.style.left = `${e.clientX - (e.target.clientWidth / 2)}px`;
  }

  return (
    <button className="DesktopIcon" onDoubleClick={onDoubleClick} onDragEnd={dropIcon}>
      <div className="icon">
        {icon}
      </div>
      <div className="title">
        {title}
      </div>
    </button>
  )
}

export default DesktopIcon;