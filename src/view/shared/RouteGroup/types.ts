export interface RouteMiddlewareControllerProps {
  middlewares: React.ReactElement<MiddlewareProps>[];
  children: React.ReactElement;
  match?: {
    params: Record<string, string>;
  };
}

export interface MiddlewareProps {
  next?: () => void;
  match: {
    params: Record<string, string>;
  };
}
