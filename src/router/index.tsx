import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LayoutContent from 'view/LayoutContent';
import { ROUTES_NAVIGATION, ROUTES } from 'router/routes';
import RouteMiddlewareController from 'view/shared/RouteMiddlewareController';
import SearchChecker from 'view/shared/middleware/SearchChecker';
import SearchResult from 'view/SearchResult';
import ProductDetail from 'view/ProductDetail';
import ItemDetailChecker from 'view/shared/middleware/itemDetailChecker';
/*
I wanted to organize the router a bit so I separated the routes in another file, there is also the way they are organized and other parameters
*/
const Router: React.FC = () => {
  return (
    <Switch>
      <LayoutContent>
        <Route {...ROUTES[ROUTES_NAVIGATION.SEARCH_ITEMS]}
          render={() => (
            <RouteMiddlewareController
              middlewares={[<SearchChecker />]}
            >
              <SearchResult />
            </RouteMiddlewareController>
          )} />
        <Route
          {...ROUTES[ROUTES_NAVIGATION.ITEM_DETAIL]}
          render={() => (
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
