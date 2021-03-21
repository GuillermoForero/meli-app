import { itemsTypes } from 'state/items/types';
import {forwardPayload } from 'state/utils'
import { ItemDetail, Search } from 'interfaces/http';

export const itemsActions = {
  searchItems: forwardPayload<string>(itemsTypes.SEARCH_ITEMS),
  searchItemsSuccess: forwardPayload<Search>(itemsTypes.SEARCH_ITEMS_SUCCESS),
  searchItemsFailed: forwardPayload<string>(itemsTypes.SEARCH_ITEMS_FAILED),
  getItemDetail: forwardPayload<string>(itemsTypes.GET_ITEM_DETAIL),
  getItemDetailSuccess: forwardPayload<ItemDetail>(itemsTypes.GET_ITEM_DETAIL_SUCCESS),
  getItemDetailFailed: forwardPayload<string>(itemsTypes.GET_ITEM_DETAIL_FAILED),
};
