/* eslint-disable no-prototype-builtins */
import { Action } from 'redux';
import { merge } from 'lodash';

export interface ReduxAction<T> extends Action<string> {
  type: string;
  payload: T;
}

export type KeyValue<T = any> = { [key: string]: T };

export type ReducerHandler = (state: any, action: ReduxAction<any>) => any;

export const mapToState = (map: KeyValue): ReducerHandler => (
  state: KeyValue
) => merge({}, state, map);

export const createReducer = (
  initialState: KeyValue<any>,
  handlers: KeyValue<ReducerHandler>
) => {
  return (state: KeyValue<any> = initialState, action: ReduxAction<any>) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
};

export const forwardPayload = <T>(actionType: string) => (
  payload: T
): ReduxAction<T> => ({
  payload,
  type: actionType,
});

export const staticPayload = <T = undefined>(
  payload: T,
  actionType: string
) => (): ReduxAction<T> => ({
  payload,
  type: actionType,
});

export const noPayload = (actionType: string) =>
  staticPayload(undefined, actionType);
