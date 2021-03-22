import React from 'react';
import { render } from 'tests/support/customRender';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import RouteMiddlewareController from 'view/shared/RouteMiddlewareController';
import { appStoreEmpty, appStoreFull } from 'tests/support/stubAppStore';
import ItemDetailChecker from 'view/shared/middleware/itemDetailChecker';

const FakeComponent = () => {
  return <p>This is a Fake Component</p>;
};

const mockStore = createMockStore();

describe('[Middleware ItemDetailChecker]', () => {
  it('Runs a setup ItemDetailChecker middleware', () => {
    const store = mockStore(appStoreFull);

    const { container, getByText } = render(
      <Provider store={store}>
        <RouteMiddlewareController middlewares={[<ItemDetailChecker />]}>
          <FakeComponent />
      </RouteMiddlewareController>
      </Provider>
    );

    expect(getByText('This is a Fake Component')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
  it('ItemDetailChecker middleware with empty store', () => {
    const emptyStore = mockStore(appStoreEmpty);

    const { container } = render(
      <Provider store={emptyStore}>
        <RouteMiddlewareController middlewares={[<ItemDetailChecker />]}>
          <FakeComponent />
      </RouteMiddlewareController>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
