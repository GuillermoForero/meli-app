export enum ROUTES_NAVIGATION {
    SEARCH_ITEMS = 'SEARCH_ITEMS',
    ITEM_DETAIL = 'ITEM_DETAIL',
}

export const ROUTES = {
    [ROUTES_NAVIGATION.SEARCH_ITEMS]: {
        path: '/items',
        strict: true,
        exact: true,
    },
    [ROUTES_NAVIGATION.ITEM_DETAIL]: {
        path: '/items/:id',
        strict: true,
        exact: true,
    },
  };
