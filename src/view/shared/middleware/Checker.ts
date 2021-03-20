import React, { useEffect } from 'react';

import { MiddlewareProps } from 'view/shared/RouteGroup/types';

const Checker: React.FC<MiddlewareProps> = ({
  match,
  next,
}: MiddlewareProps) => {
  useEffect(() => {
      next && next();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Checker;
