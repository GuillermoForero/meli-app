import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LayoutContent from 'view/LayoutContent';
import { ROUTES_NAVIGATION, ROUTES } from 'router/routes';
import RouteMiddlewareController from 'view/shared/RouteGroup';
import Checker from 'view/shared/middleware/Checker';
import SearchResult from 'view/SearchResult';
import ProductDetail from 'view/ProductDetail';

const Router: React.FC = () => {
  return (
    <Switch>
      <LayoutContent>
        <Route {...ROUTES[ROUTES_NAVIGATION.SEARCH_ITEMS]}
          render={(routeProps) => (
            <RouteMiddlewareController
              middlewares={[<Checker {...routeProps} />]}
              {...routeProps}
            >
              <SearchResult />
            </RouteMiddlewareController>
          )} />
        <Route
          {...ROUTES[ROUTES_NAVIGATION.ITEM_DETAIL]}
          render={(routeProps) => (
            <RouteMiddlewareController
              middlewares={[<Checker {...routeProps} />]}
              {...routeProps}
            >
              <ProductDetail />
            </RouteMiddlewareController>
          )}
        />
      </LayoutContent>
    </Switch>
  );
};

export default Router;
