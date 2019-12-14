import React from 'react';
import uuidv4 from 'uuid/v4';
import windowStore from '../stores/windowStore';

const onDesktopIconDoubleClick = ({ DesktopWindow, ext, content, fileId, files }) => {
  const id = uuidv4();

  const title = (() => {
    switch (ext) {
      case 'txt':
        return fileId ? files.map(f => f.id === fileId && f.name) : 'Notepad';
      default:
        return 'File Title';
    }
  })();

  windowStore.dispatch({
    type: 'open',
    window: <DesktopWindow
      key={id}
      id={id}
      content={content}
      title={title}
    />
  })
}

export default onDesktopIconDoubleClick;