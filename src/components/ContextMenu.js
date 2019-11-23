import React from 'react';
import { ChevronRight } from '../icons';

const ContextMenu = ({ left, top }) => {
  return (
    <ul className="ContextMenu" style={{ left, top }}>
      <li onClick={() => window.location.reload()}>Reload</li>
      <li>Set wallpaper</li>
      <li>New <ChevronRight /></li>
    </ul>
  )
}

export default ContextMenu;