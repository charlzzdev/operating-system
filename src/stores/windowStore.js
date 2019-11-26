import { createStore } from 'redux';

function windowOpener(state = [], action) {
  switch (action.type) {
    case 'open': return [...state, action.window]
    case 'close': return [
      ...state.filter(w => w.key !== action.key)
    ];
    default: return state;
  }
}

const windowStore = createStore(windowOpener);

export default windowStore;
