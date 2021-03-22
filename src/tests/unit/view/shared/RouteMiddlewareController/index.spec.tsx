import React from 'react';
import { render, fireEvent } from 'tests/support/customRender';
import RouteMiddlewareController from 'view/shared/RouteMiddlewareController';

const Middleware = ({ next }: { next?: () => void }) => {
  return <p onClick={next}>Middleware</p>;
};

const Component = () => {
  return <p>Component</p>;
};

class ErrorBoundary extends React.Component {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

describe('[RouteMiddlewareController]', () => {
  it('Renders a RouteMiddlewareController with a Middleware', () => {
    const { container, getByText, queryByText } = render(
      <RouteMiddlewareController middlewares={[<Middleware />]}>
        <Component />
      </RouteMiddlewareController>,
    );

    expect(getByText('Middleware')).toBeDefined();
    fireEvent.click(getByText('Middleware'));
    expect(queryByText('Middleware')).toBeNull();
    expect(getByText('Component')).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('Renders a RouteMiddlewareController with multiple middlewares', () => {
    const { container, getByText, queryByText } = render(
      <RouteMiddlewareController
        middlewares={[<Middleware />, <Middleware />, <Middleware />]}
      >
        <Component />
      </RouteMiddlewareController>,
    );

    expect(getByText('Middleware')).toBeDefined();
    fireEvent.click(getByText('Middleware'));
    fireEvent.click(getByText('Middleware'));
    fireEvent.click(getByText('Middleware'));
    expect(queryByText('Middleware')).toBeNull();

    expect(getByText('Component')).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('Renders a RouteMiddlewareController and throw an error when middlewares array is empty', () => {
    const { container, getByText } = render(
      <ErrorBoundary>
        <RouteMiddlewareController middlewares={[]}>
          <Component />
        </RouteMiddlewareController>
      </ErrorBoundary>,
    );

    expect(getByText('Something went wrong.')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
