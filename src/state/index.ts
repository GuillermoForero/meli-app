import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { itemsReducer, itemsEpics } from 'state/items';
import HttpClients from 'http/http.clients';
/* 
In general, for the use of the store I use types, reducer, action and epic.
I use the latter to have a way to control the promises in a simple way,
also the idea is to make it easily scalable and in the future use perhaps more rxjs operators, more specific
*/
export type EpicDependencies = {
  meliClient: typeof HttpClients.meliHttp;
};

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    meliClient: HttpClients.meliHttp,
  },
});

export const rootEpic: any = combineEpics(...Object.values(itemsEpics));

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  items: itemsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
