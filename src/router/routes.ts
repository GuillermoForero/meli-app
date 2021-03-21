export enum ROUTES_NAVIGATION {
    SEARCHER = 'SEARCHER',
    SEARCH_ITEMS = 'SEARCH_ITEMS',
    ITEM_DETAIL = 'ITEM_DETAIL',
}

export const ROUTES = {
    [ROUTES_NAVIGATION.SEARCHER]: {
        path: '/',
        strict: true,
        exact: true,
        urlTemplate: '/'
    },
    [ROUTES_NAVIGATION.SEARCH_ITEMS]: {
        path: '/items/search/:searchValue',
        strict: true,
        exact: true,
        urlTemplate: '/items/search/{{searchValue}}'
    },
    [ROUTES_NAVIGATION.ITEM_DETAIL]: {
        path: '/items/:id',
        strict: true,
        exact: true,
        urlTemplate: 'items/{{id}}'
    },
};
