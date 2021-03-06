import { useCallback } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { ROUTES_NAVIGATION, ROUTES } from 'router/routes';
import { KeyValue } from 'state/utils';

interface NavigationService {
  navigateTo: (route: ROUTES_NAVIGATION, params?: object) => void;
  routeParams: KeyValue;
  searchParams: string;
}
interface RouteParams {
  searchValue: string;
  id: string;
}

export const buildRoute = (route: string, params: KeyValue) => {
  let buildedRoute = route;

  Object.keys(params).forEach((s) => {
    if (params[s]) {
      buildedRoute = buildedRoute.replace(`{{${s}}}`, params[s]);
    }
  });
  return buildedRoute.replace(/\/{{(.*)}}/, '');
};

const useNavigator = (): NavigationService => {
  const history = useHistory();
  const {search} = useLocation();
  const routeParams = useParams<RouteParams>();

  const navigateTo = useCallback(
    (route: ROUTES_NAVIGATION, params: KeyValue = {}) => {
      history.push(buildRoute(ROUTES[route].urlTemplate, params));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    routeParams,
    navigateTo,
    searchParams: search,
  };
};

export default useNavigator;
