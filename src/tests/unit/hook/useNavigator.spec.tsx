import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import rrd from 'react-router-dom';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';

import useNavigator, { buildRoute } from 'hook/useNavigator';

import { ROUTES_NAVIGATION } from 'router/routes';
import { appStoreFull } from 'tests/support/stubAppStore';

const mockStore = createMockStore();

describe('[useNavigator]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const cases = [
    {
      name: 'SEARCH route',
      result: '/',
      params: {},
      route: ROUTES_NAVIGATION.SEARCHER,
    },
    {
      name: 'CATALOGUE route',
      params: { searchValue: 'searchValue' },
      result: '/items?search=searchValue',
      route: ROUTES_NAVIGATION.SEARCH_ITEMS,
    },
    {
      name: 'CATALOGUE FILTER route',
      params: {
        id: 'id_1',
      },
      result: '/items/id_1',
      route: ROUTES_NAVIGATION.ITEM_DETAIL,
    },
  ];

  cases.forEach(c => {
    it(`Executes navigateTo function with ${c.name}`, () => {
      const store = mockStore(appStoreFull);
      const pushMockFn = jest.fn();

      jest.spyOn(rrd, 'useHistory').mockImplementation(() => ({ push: pushMockFn } as any));

      const { result } = renderHook(() => useNavigator(), {
        wrapper: props => <Provider store={store}>{props.children}</Provider>,
      });
      expect(typeof result.current.navigateTo).toBe('function');

      result.current.navigateTo(c.route, c.params);

      expect(pushMockFn).toBeCalledTimes(1);
      expect(pushMockFn).toBeCalledWith(c.result);
    });
  });

  it('Renders a useNavigatorHook and get RouteParams', () => {
    const store = mockStore(appStoreFull);

    const { result } = renderHook(() => useNavigator(), {
      wrapper: props => <Provider store={store}>{props.children}</Provider>,
    });

    expect(result.current.routeParams).toStrictEqual({
    });
  });

  it('Renders a useNavigatorHook and get the current location', () => {
    const store = mockStore(appStoreFull);

    const { result } = renderHook(() => useNavigator(), {
      wrapper: props => <Provider store={store}>{props.children}</Provider>,
    });
  });
});
