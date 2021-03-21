import { createSelectorCreator, defaultMemoize } from 'reselect';
import { isEqual } from 'lodash';
import { ItemsState } from 'state/items/state';

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const itemsSelectors = {
  searchItems: createDeepEqualSelector(
    ({ itemsState }: { itemsState: ItemsState }) => itemsState.searchItems,
    searchItems => searchItems
  ),
  searchItemsStatus: createDeepEqualSelector(
    ({ itemsState }: { itemsState: ItemsState }) => itemsState.searchStatus,
    searchStatus => searchStatus
  ),
  itemDetail: createDeepEqualSelector(
    ({ itemsState }: { itemsState: ItemsState }) => itemsState.itemDetail,
    itemDetail => itemDetail
  ),
  itemDetailStatus: createDeepEqualSelector(
    ({ itemsState }: { itemsState: ItemsState }) => itemsState.itemDetailStatus,
    itemDetailStatus => itemDetailStatus
  ),
};
