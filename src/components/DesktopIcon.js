import React from 'react';

const DesktopIcon = ({ icon, title, onDoubleClick }) => {
  const dropIcon = e => {
    const top = e.clientY - (e.target.clientHeight / 2);
    const left = e.clientX - (e.target.clientWidth / 2);
    const rightBoundary = window.innerWidth - e.target.clientWidth - 16;
    const bottomBoundary = window.innerHeight - e.target.clientHeight - 64;

    e.target.style.position = 'absolute';
    e.target.style.top = `${top > window.innerHeight - 120 ? bottomBoundary : (top < 0 ? 0 : top)}px`;
    e.target.style.left = `${left > window.innerWidth - 120 ? rightBoundary : (left < 0 ? 0 : left)}px`;
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