import { createStore } from 'redux';

function fileSaver(state = JSON.parse(window.localStorage.getItem('files')) || [], action) {
  setTimeout(() => {
    window.localStorage.setItem('files', JSON.stringify(state));
  }, 0);

  switch (action.type) {
    case 'save': return [...state, action.file];
    case 'replace': return state.map(file => {
      if (file.name === action.file.name) {
        file.content = action.file.content;
      }
      return file;
    });
    case 'style': return state.map(file => {
      if (file.name === action.fileName) {
        file.style = {
          position: 'absolute',
          left: action.style.left,
          top: action.style.top
        };
      }
      return file;
    });
    case 'rename': return state.map(file => {
      const fileNameExists = state.some(f => f.name === action.fileName);
      if (!fileNameExists && file.id === action.fileId) {
        file.name = action.fileName;
      }
      return file;
    });
    case 'delete': return state.filter(file => file.id !== action.fileId);
    default: return state;
  }
}

const fileStore = createStore(fileSaver);

export default fileStore;