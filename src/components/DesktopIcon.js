import React from 'react';
import dropIcon from '../functions/dropIcon';

const DesktopIcon = ({ icon, title, onDoubleClick, style }) => {
  return (
    <button
      className="DesktopIcon"
      onDoubleClick={onDoubleClick}
      onKeyDown={e => e.key === 'Enter' && onDoubleClick('')}
      onDragEnd={dropIcon}
      data-filename={title}
      style={style}
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