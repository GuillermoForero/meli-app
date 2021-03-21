import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { itemsReducer, itemsEpics } from 'state/items';
import HttpClients from 'http/http.clients';

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
