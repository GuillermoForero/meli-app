export interface RouteMiddlewareControllerProps {
  middlewares: React.ReactElement<MiddlewareProps>[];
  children: React.ReactElement;
}

export interface MiddlewareProps {
  next?: () => void;
}
