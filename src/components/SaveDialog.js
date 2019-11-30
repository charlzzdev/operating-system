import React, { useEffect, useRef } from 'react';
import { Close } from '../icons';
import fileStore from '../stores/fileStore';

const SaveDialog = ({ text, setShowSaveDialog }) => {
  const fileName = useRef(null);

  useEffect(() => {
    fileName.current.select();
  }, []);

  return (
    <div className="SaveDialog">
      <button className="CloseDialog" onClick={() => setShowSaveDialog(false)}><Close /></button>
      <input type="text" defaultValue="untitled" ref={fileName} />
      <button onClick={() => {
        fileStore.dispatch({
          type: 'save',
          file: { name: fileName.current.value, content: text }
        });
        setShowSaveDialog(false);
      }}>Save</button>
    </div>
  )
}

export default SaveDialog;
