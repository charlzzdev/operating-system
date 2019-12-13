import React from 'react';
import uuidv4 from 'uuid/v4';
import windowStore from '../stores/windowStore';

const onDesktopIconDoubleClick = ({ DesktopWindow, ext, content, files }) => {
  const id = uuidv4();

  const title = (() => {
    switch (ext) {
      case 'txt':
        return content.length ? files.map(f => f.content === content && f.name + '.txt') : 'Notepad';
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