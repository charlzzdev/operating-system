import React, { useEffect, useRef } from 'react';
import { Close } from '../icons';
import fileStore from '../stores/fileStore';

const RenameDialog = ({ fileId, setRenameDialog }) => {
  const newFileName = useRef(null);

  useEffect(() => newFileName.current.focus(), []);

  const rename = () => {
    fileStore.dispatch({
      type: 'rename',
      fileId,
      fileName: `${newFileName.current.value}.txt`
    });

    setRenameDialog({ open: false, fileId: null });
  }

  return (
    <div className="SaveDialog" style={{ width: '300px', zIndex: 10000 }}>
      <button
        onClick={() => setRenameDialog({ open: false, fileId: null })}
        style={{ position: 'absolute', top: 0, right: 0, width: '20px', height: '20px', padding: 0 }}
      ><Close /></button>
      <input type="text" ref={newFileName} placeholder="New name" />
      <button onClick={rename}>Rename</button>
    </div>
  )
}

export default RenameDialog;