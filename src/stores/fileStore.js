import { createStore } from 'redux';

function fileSaver(state = [], action) {
  switch (action.type) {
    case 'save': return [...state, action.file];
    case 'replace': return state.map(file => {
      if (file.name === action.file.name) {
        file.content = action.file.content;
      }
      return file;
    });
    default: return state;
  }
}

const fileStore = createStore(fileSaver);

export default fileStore;