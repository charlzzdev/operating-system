import React from 'react';
import dropIcon from '../functions/dropIcon';

const DesktopIcon = ({ icon, title, onDoubleClick }) => {
  return (
    <button
      className="DesktopIcon"
      onDoubleClick={onDoubleClick}
      onKeyDown={e => e.key === 'Enter' && onDoubleClick()}
      onDragEnd={dropIcon}
    >
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