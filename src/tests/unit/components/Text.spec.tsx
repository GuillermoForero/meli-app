import React from 'react';
import { render } from 'tests/support/customRender';
import Text from 'components/Text';

describe('[Text]', () => {
  it('Renders default snapshot', () => {
    const { container, getByText } = render(<Text>text example</Text>);
    expect(getByText('text example')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
