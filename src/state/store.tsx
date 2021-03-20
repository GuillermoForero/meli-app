import { combineReducers, createStore } from 'redux';


export const rootReducer = combineReducers({
  base: (state = { loaded: true }, action) => state,
});

const store = createStore(rootReducer, {});

export default store;
