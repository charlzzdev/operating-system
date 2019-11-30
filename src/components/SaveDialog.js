import React, { useEffect, useRef } from 'react';
import { Close } from '../icons';
import fileStore from '../stores/fileStore';

const SaveDialog = ({ text, setShowSaveDialog }) => {
  const fileName = useRef(null);

  useEffect(() => {
    fileName.current.select();
  }, []);

  const save = () => {
    const fileNameExists = fileStore.getState().some(file => file.name === fileName.current.value);
    const file = { name: fileName.current.value, content: text };

    if (!fileNameExists) {
      fileStore.dispatch({ type: 'save', file });
    } else {
      fileStore.dispatch({ type: 'replace', file });
    }

    setShowSaveDialog(false);
  }

  return (
    <div className="SaveDialog">
      <button className="CloseDialog" onClick={() => setShowSaveDialog(false)}><Close /></button>
      <input type="text" defaultValue="untitled" ref={fileName} />
      <button onClick={save}>Save</button>
    </div>
  )
}

export default SaveDialog;
