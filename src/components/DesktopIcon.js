import React from 'react';
import dropIcon from '../functions/dropIcon';
import contextMenuStore from '../stores/contextMenuStore';

const DesktopIcon = ({ icon, title, openRenameDialog, onDoubleClick, style }) => {
  return (
    <button
      className="DesktopIcon"
      onDoubleClick={onDoubleClick}
      onKeyDown={e => e.key === 'Enter' && onDoubleClick()}
      onDragEnd={dropIcon}
      onContextMenu={e => contextMenuStore.dispatch({
        type: 'context_icon',
        title,
        coords: { x: e.clientX, y: e.clientY },
        methods: {
          open: onDoubleClick,
          rename: openRenameDialog
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