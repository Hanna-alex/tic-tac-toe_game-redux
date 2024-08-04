
import { createStore, combineReducers } from 'redux';
import { fieldReducer, playerReducer } from './reducers';

const rootReducer = combineReducers({
  field: fieldReducer,
  player: playerReducer,
});

export const store = createStore(rootReducer);