import { createStore } from 'redux';

let zIndex = 900;

function windowOpener(state = [], action) {
  switch (action.type) {
    case 'open': return [...state, action.window];
    case 'close': return [
      ...state.filter(w => w.key !== action.key)
    ];
    case 'increaseZIndex': return state.map(w => {
      const clickedWindow = document.getElementById(action.id);
      if (w.key === action.id) {
        clickedWindow.style.zIndex = zIndex++;
      }
      return w;
    });
    default: return state;
  }
}

const windowStore = createStore(windowOpener);

export default windowStore;
