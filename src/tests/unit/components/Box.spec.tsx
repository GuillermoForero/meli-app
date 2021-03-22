import React from 'react';
import { render } from 'tests/support/customRender';
import Box from 'components/Box';
import Text from 'components/Text';

describe('[Box]', () => {
  it('Renders default snapshot', () => {
    const { container, getByText } = render(<Box>
      <Text>text example1</Text>
      <Text>text example2</Text>
    </Box>);
    expect(getByText('text example1')).toBeDefined();
    expect(getByText('text example2')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
