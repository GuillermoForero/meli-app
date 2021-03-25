import React, { useState, useCallback } from 'react';

import { RouteMiddlewareControllerProps } from 'view/shared/RouteMiddlewareController/types';
//The implementation of a kind of middleware and middleware controller is in general
//to execute actions before the component or the view is rendered and thus when it is rendered it has what it needs loaded
const RouteMiddlewareController: React.FC<RouteMiddlewareControllerProps> = ({
  children,
  middlewares,
}: RouteMiddlewareControllerProps) => {
  const middlewaresLength = middlewares.length;

  if (!middlewaresLength) {
    throw new Error('The middlewares array prop should not be empty');
  }
  const [currentMiddleware, setCurrentMiddleware] = useState(1);

  const next = useCallback(() => {
    setCurrentMiddleware(m => m + 1);
  }, []);

  const componentToRender =
    currentMiddleware <= middlewaresLength
      ? middlewares[currentMiddleware - 1]
      : children;

  return (
    <>
      {React.cloneElement(componentToRender, {
        next: currentMiddleware <= middlewaresLength ? next : undefined,
      })}
    </>
  );
};

export default RouteMiddlewareController;
