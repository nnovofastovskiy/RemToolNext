export interface ICategory {
    id: number
    attributes: ICatAttributes
}

export interface ICatAttributes {
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    tools: {
        data: ITool[]
    }
    image: IImage
}

export interface ITool {
    id: number,
    attributes: IToolAttributes
}

export interface IToolAttributes {
    createdAt: string
    updatedAt: string
    publishedAt: string
    title: string
    pricelist: string
    seoTitle: string
    category: {
        data: {
            id: number,
            attributes: {
                title: string
                createdAt: string
                updatedAt: string
                publishedAt: string
            }
        }
    }
    image: IImage
}

export interface IImage {
    data: {
        id: number,
        attributes: IImageAttributes
    }
}

export interface IImageAttributes {
    name: string
    alternativeText: string | null
    caption: any
    width: number
    height: number
    formats: any
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
}