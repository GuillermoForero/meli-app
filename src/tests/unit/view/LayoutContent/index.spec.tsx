import React from 'react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { render, fireEvent } from 'tests/support/customRender';
import { appStoreFull } from 'tests/support/stubAppStore';
import LayoutContent from 'view/LayoutContent';

describe('[LayoutContent]', () => {
  const mockStore = createMockStore();
  it('Renders default snapshot', () => {
    const { container, getByPlaceholderText } = render(<LayoutContent>text example</LayoutContent>);
    expect(getByPlaceholderText('Nunca dejes de buscar')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
  it('Input value', () => {
    const store = mockStore(appStoreFull);
    const { container, getByPlaceholderText, getByRole } = render(
      <Provider store={store}>
        <LayoutContent>text example</LayoutContent>
      </Provider>);
    const inputSearch = getByPlaceholderText('Nunca dejes de buscar');
    const buttonSearch = getByRole('button');
    expect(inputSearch).toBeDefined();
    fireEvent.change(inputSearch, { target: { value: 'iphone 20' } });
    fireEvent.click(buttonSearch);
    expect(container).toMatchSnapshot();
  });
});
