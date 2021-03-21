import { REQUEST_STATUS } from 'interfaces/state';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES_NAVIGATION } from 'router/routes';
import { itemsActions, itemsSelectors } from 'state/items';

import { MiddlewareProps } from 'view/shared/RouteMiddlewareController/types';
import useNavigator from 'view/shared/hook/useNavigator';

const ItemDetailChecker: React.FC<MiddlewareProps> = ({
  next,
}: MiddlewareProps) => {
  const dispatch = useDispatch();
  const { navigateTo, routeParams, currentLocation } = useNavigator();
  const itemDetailStatus = useSelector(itemsSelectors.itemDetailStatus);
  useEffect(() => {
    if (itemDetailStatus === REQUEST_STATUS.FAILED) {
      navigateTo(ROUTES_NAVIGATION.SEARCHER);
    }

    if (itemDetailStatus === REQUEST_STATUS.LOADED) {
      console.log('loaded')
      next && next();
    }

    if (itemDetailStatus === REQUEST_STATUS.NOT_STARTED) {
      console.log(routeParams)
      console.log(currentLocation)
      const searchParam = routeParams.id;
      console.log(searchParam)
      if (searchParam) {
        dispatch(itemsActions.getItemDetail(searchParam));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemDetailStatus]);

  return null;
};

export default ItemDetailChecker;
