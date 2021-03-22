import React from 'react';
import { render } from 'tests/support/customRender';
import Text from 'components/Text';
import LayoutContent from 'view/LayoutContent';

describe('[LayoutContent]', () => {
  it('Renders default snapshot', () => {
    const { container, getByPlaceholderText } = render(<LayoutContent>text example</LayoutContent>);
    expect(getByPlaceholderText('Nunca dejes de buscar')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
