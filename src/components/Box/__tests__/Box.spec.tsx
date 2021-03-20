import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Box from '../';

describe('[Box]', () => {
  const cases = [
    {
      name: 'default props',
    },
    {
      name: 'custom size props',
      size: {
        sm: '40px',
        xs: '80px',
        md: '100px',
        lg: '120px',
        xlg: '150px',
      },
    },
  ];

  cases.forEach(c => {
    it(`Renders a Box Component with ${c.name}`, () => {
      const { container } = render(<Box width={c.size} height={c.size} />);

      expect(container).toMatchSnapshot();
    });
  });
});
