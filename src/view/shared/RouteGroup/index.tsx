import React, { useState, useCallback } from 'react';

import { RouteMiddlewareControllerProps } from 'view/shared/RouteGroup/types';

const RouteMiddlewareController: React.FC<RouteMiddlewareControllerProps> = ({
  children,
  match,
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
        match,
      })}
    </>
  );
};

export default RouteMiddlewareController;
