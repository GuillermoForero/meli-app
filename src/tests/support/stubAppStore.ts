import { REQUEST_STATUS } from "interfaces/state";
import { ItemsState } from "state/items/state";

export const appStoreFull = {
    items: {
        searchItems: {
            author: {
                name: 'James',
                lastname: 'Bond'
            },
            categories: [],
            items: [
                {
                    id: 'id_1',
                    title: 'title_1',
                    price: 'price_1',
                    picture: 'url',
                    condition: 'new',
                    free_shipping: true,
                    sold_quantity: 1000,
                    description: 'description_1'
                }
            ]
        },
        itemDetail: {
            author: {
                name: 'James',
                lastname: 'Bond'
            },
            item: {
                id: 'id_1',
                title: 'title_1',
                price: 'price_1',
                picture: 'url',
                condition: 'new',
                free_shipping: true,
                sold_quantity: 1000,
                description: 'description_1'
            }
        },
        searchStatus: REQUEST_STATUS.LOADED,
        itemDetailStatus: REQUEST_STATUS.LOADED
    }
}

export const appStoreEmpty = {
    items: {
        searchItems: undefined,
        itemDetail: undefined,
        searchStatus: REQUEST_STATUS.NOT_STARTED,
        itemDetailStatus: REQUEST_STATUS.NOT_STARTED
    }
}
