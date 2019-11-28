import React, { useEffect, useRef } from 'react';
import { Close } from '../icons';

const SaveDialog = ({ saveTxt, setShowSaveDialog }) => {
  const fileName = useRef(null);

  useEffect(() => {
    fileName.current.select();
  }, []);

  return (
    <div className="SaveDialog">
      <button className="CloseDialog" onClick={() => setShowSaveDialog(false)}><Close /></button>
      <input type="text" defaultValue="untitled" ref={fileName} />
      <button onClick={() => saveTxt(fileName.current.value)}>Save</button>
    </div>
  )
}

export default SaveDialog;
