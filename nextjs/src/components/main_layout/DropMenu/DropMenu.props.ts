export interface ICategory {
    id: number,
    attributes: {
        title: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string
    }
}

export interface ITool {
    id: number,
    attributes: {
        title: string,
        seoTitle: string
        pricelist: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
    }
}

export interface DropMenuProps {
    categories: ICategory[]
}