import React from 'react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { render } from 'tests/support/customRender';
import { appStoreFull } from 'tests/support/stubAppStore';
import ProductDetail from 'view/ProductDetail';

describe('[ProductDetail]', () => {
  const mockStore = createMockStore();
  it('Renders default snapshot', () => {
    const store = mockStore(appStoreFull);
    const { container, getByText } = render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>);
    expect(getByText('Descripción del producto')).toBeDefined();
    expect(getByText('title_1')).toBeDefined();
    expect(getByText('description_1')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
