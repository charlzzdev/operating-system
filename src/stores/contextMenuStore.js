import { createStore } from 'redux';

function contextMenuOpener(state = {}, action) {
  switch (action.type) {
    case 'context_default': return { open: true, ...action };
    case 'context_file': return { open: true, ...action }
    case 'close': return { open: false };
    default: return state;
  }
}

const contextMenuStore = createStore(contextMenuOpener);

export default contextMenuStore;