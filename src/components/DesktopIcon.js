import React from 'react';
import dropIcon from '../functions/dropIcon';
import contextMenuStore from '../stores/contextMenuStore';

const DesktopIcon = ({ icon, title, onDoubleClick, style }) => {
  return (
    <button
      className="DesktopIcon"
      onDoubleClick={onDoubleClick}
      onKeyDown={e => e.key === 'Enter' && onDoubleClick()}
      onDragEnd={dropIcon}
      onContextMenu={e => contextMenuStore.dispatch({
        type: 'context_icon',
        coords: { x: e.clientX, y: e.clientY },
        methods: {
          open: onDoubleClick
        }
      })}
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