import React from 'react';
import { render } from 'tests/support/customRender';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import RouteMiddlewareController from 'view/shared/RouteMiddlewareController';
import { appStoreEmpty, appStoreFull } from 'tests/support/stubAppStore';
import SearchChecker from 'view/shared/middleware/SearchChecker';

const FakeComponent = () => {
  return <p>This is a Fake Component</p>;
};

const mockStore = createMockStore();

describe('[Middleware SearchChecker]', () => {
  it('Runs a setup SearchChecker middleware', () => {
    const store = mockStore(appStoreFull);

    const { container, getByText } = render(
      <Provider store={store}>
        <RouteMiddlewareController middlewares={[<SearchChecker />]}>
          <FakeComponent />
      </RouteMiddlewareController>
      </Provider>
    );

    expect(getByText('This is a Fake Component')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
  it('SearchChecker middleware with empty store', () => {
    const emptyStore = mockStore(appStoreEmpty);

    const { container } = render(
      <Provider store={emptyStore}>
        <RouteMiddlewareController middlewares={[<SearchChecker />]}>
          <FakeComponent />
      </RouteMiddlewareController>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
