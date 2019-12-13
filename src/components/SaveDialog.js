import React, { useEffect, useRef } from 'react';
import uuidv4 from 'uuid/v4';
import { Close } from '../icons';
import fileStore from '../stores/fileStore';

const SaveDialog = ({ title, textarea, setShowSaveDialog }) => {
  const fileName = useRef(null);

  useEffect(() => {
    fileName.current.select();

    if (title !== 'Notepad') {
      fileStore.dispatch({
        type: 'replace',
        file: {
          name: title.filter(e => e !== false)[0].split(".")[0],
          content: textarea.current.value
        }
      });
      setShowSaveDialog(false);
      textarea.current.focus();
    }
  }, [setShowSaveDialog, title, textarea]);

  const save = () => {
    const fileNameExists = fileStore.getState().some(file => file.name === fileName.current.value);
    const file = {
      name: fileName.current.value,
      content: textarea.current.value,
      id: uuidv4()
    };

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
