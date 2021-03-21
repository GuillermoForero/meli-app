import { createSelectorCreator, defaultMemoize } from 'reselect';
import { isEqual } from 'lodash';
import { ItemsState } from 'state/items/state';

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const itemsSelectors = {
  searchItems: createDeepEqualSelector(
    ({ items }: { items: ItemsState }) => items.searchItems,
    searchItems => searchItems
  ),
  searchItemsStatus: createDeepEqualSelector(
    ({ items }: { items: ItemsState }) => items.searchStatus,
    searchStatus => searchStatus
  ),
  itemDetail: createDeepEqualSelector(
    ({ items }: { items: ItemsState }) => items.itemDetail,
    itemDetail => itemDetail
  ),
  itemDetailStatus: createDeepEqualSelector(
    ({ items }: { items: ItemsState }) => items.itemDetailStatus,
    itemDetailStatus => itemDetailStatus
  ),
};
