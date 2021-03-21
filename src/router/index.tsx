import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LayoutContent from 'view/LayoutContent';
import { ROUTES_NAVIGATION, ROUTES } from 'router/routes';
import RouteMiddlewareController from 'view/shared/RouteMiddlewareController';
import SearchChecker from 'view/shared/middleware/SearchChecker';
import SearchResult from 'view/SearchResult';
import ProductDetail from 'view/ProductDetail';
import ItemDetailChecker from 'view/shared/middleware/itemDetailChecker';

const Router: React.FC = () => {
  return (
    <Switch>
      <LayoutContent>
        <Route {...ROUTES[ROUTES_NAVIGATION.SEARCH_ITEMS]}
          render={(routeProps) => (
            <RouteMiddlewareController
              middlewares={[<SearchChecker />]}
            >
              <SearchResult />
            </RouteMiddlewareController>
          )} />
        <Route
          {...ROUTES[ROUTES_NAVIGATION.ITEM_DETAIL]}
          render={(routeProps) => (
            <RouteMiddlewareController
              middlewares={[<ItemDetailChecker />]}
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
