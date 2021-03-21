import { itemsTypes } from 'state/items/types';
import { ItemDetail, Search } from 'interfaces/http';
import { REQUEST_STATUS } from 'interfaces/state';
import { createReducer, mapToState, ReduxAction } from 'state/utils';

export interface ItemsState {
  searchItems?: Search;
  itemDetail?: ItemDetail;
  searchStatus: REQUEST_STATUS;
  itemDetailStatus: REQUEST_STATUS
}

const baseState: ItemsState = {
  searchItems: undefined,
  itemDetail: undefined,
  searchStatus: REQUEST_STATUS.NOT_STARTED,
  itemDetailStatus: REQUEST_STATUS.NOT_STARTED
};

const setSearchItems = (
  state: ItemsState,
  { payload }: ReduxAction<Search>
): ItemsState => ({
  ...state,
  searchItems: payload,
  searchStatus: REQUEST_STATUS.LOADED
});
const setItemDetail = (
  state: ItemsState,
  { payload }: ReduxAction<ItemDetail>
): ItemsState => ({
  ...state,
  itemDetail: payload,
  itemDetailStatus: REQUEST_STATUS.LOADED
});

export const itemsReducer = createReducer(
  { ...baseState },
  {
    [itemsTypes.SEARCH_ITEMS]: mapToState({
      searchItems: undefined,
      searchStatus: REQUEST_STATUS.LOADING
    }),
    [itemsTypes.SEARCH_ITEMS_SUCCESS]: setSearchItems,
    [itemsTypes.SEARCH_ITEMS_FAILED]: mapToState({
      searchStatus: REQUEST_STATUS.FAILED
    }),
    [itemsTypes.GET_ITEM_DETAIL]: mapToState({
      itemDetail: undefined,
      itemDetailStatus: REQUEST_STATUS.LOADING
    }),
    [itemsTypes.GET_ITEM_DETAIL_SUCCESS]: setItemDetail,
    [itemsTypes.GET_ITEM_DETAIL_FAILED]: mapToState({
      itemDetailStatus: REQUEST_STATUS.FAILED
    }),
  }
);
