import { createStore } from 'redux';

function fileSaver(state = [], action) {
  switch (action.type) {
    case 'save': return [...state, action.file];
    default: return state;
  }
}

const fileStore = createStore(fileSaver);

export default fileStore;