import { REQUEST_STATUS } from 'interfaces/state';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES_NAVIGATION } from 'router/routes';
import { itemsActions, itemsSelectors } from 'state/items';

import { MiddlewareProps } from 'view/shared/RouteMiddlewareController/types';
import useNavigator from 'view/shared/hook/useNavigator';
import { SearchContext } from 'context/SearchContext';

const SearchChecker: React.FC<MiddlewareProps> = ({
  next,
}: MiddlewareProps) => {
  const dispatch = useDispatch();
  const { navigateTo, routeParams } = useNavigator();
  const { handlers } = useContext(SearchContext);
  const searchStatus = useSelector(itemsSelectors.searchItemsStatus);
  useEffect(() => {
    if (searchStatus === REQUEST_STATUS.FAILED) {
      navigateTo(ROUTES_NAVIGATION.SEARCHER);
    }

    if (searchStatus === REQUEST_STATUS.LOADED) {
      handlers?.setSearchValue(routeParams.searchValue);
      next && next();
    }

    if (searchStatus === REQUEST_STATUS.NOT_STARTED) {
      const searchParam = routeParams.searchValue;
      if (searchParam) {
        dispatch(itemsActions.searchItems(searchParam));
      }else{
        navigateTo(ROUTES_NAVIGATION.SEARCHER);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchStatus]);

  return null;
};

export default SearchChecker;
