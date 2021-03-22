import React from 'react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { render } from 'tests/support/customRender';
import { appStoreFull } from 'tests/support/stubAppStore';
import SearchResult from 'view/SearchResult';

describe('[SearchResult]', () => {
  const mockStore = createMockStore();
  it('Renders default snapshot', () => {
    const store = mockStore(appStoreFull);
    const { container, getByText } = render(
      <Provider store={store}>
        <SearchResult />
      </Provider>);
    expect(getByText('title_1')).toBeDefined();
    expect(getByText('mendoza')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
