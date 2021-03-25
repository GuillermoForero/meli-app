export interface Item {
    id: string,
    title: string,
    price: number,
    picture: string,
    condition: string,
    free_shipping: boolean
    sold_quantity?: number,
    description?: string
}

export interface Author {
    name: string
    lastname: string
}

export interface Search {
    author: Author,
    categories: string[],
    items: Item[]
}

export interface ItemDetail {
    author: Author,
    item: Item
}