import React from 'react';
import App from 'App';
import { render } from 'tests/support/customRender';

describe('[App]', () => {
  it('Renders App', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
