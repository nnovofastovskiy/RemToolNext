export interface ICategory {
    id: number
    documentId: string
    title: string
    seoTitle: any
    createdAt: string
    updatedAt: string
    publishedAt: string
    tools: ITool[]
    image: IImage
}

// export interface ICatAttributes {
//     title: string
//     seoTitle: string
//     createdAt: string
//     updatedAt: string
//     publishedAt: string
//     tools: {
//         data: ITool[]
//     }
//     image: IImage
// }

export interface ITool {
    id: number,
    documentId: string,
    createdAt: string
    updatedAt: string
    publishedAt: string
    title: string
    pricelist: string
    seoTitle: string
    category: {
        id: 2,
        documentId: string,
        title: string,
        seoTitle: string | null,
        createdAt: string,
        updatedAt: string,
        publishedAt: string
    }
    image: IImage
}

// export interface IToolAttributes {
//     createdAt: string
//     updatedAt: string
//     publishedAt: string
//     title: string
//     pricelist: string
//     seoTitle: string
//     category: {
//         data: {
//             id: number,
//             attributes: {
//                 title: string
//                 createdAt: string
//                 updatedAt: string
//                 publishedAt: string
//             }
//         }
//     }
//     image: IImage
// }

export interface IImage {
    id: number
    documentId: string
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: unknown
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: string | null
    createdAt: string
    updatedAt: string
    publishedAt: string
}

// export interface IImageAttributes {
//     name: string
//     alternativeText: string | null
//     caption: any
//     width: number
//     height: number
//     formats: any
//     hash: string
//     ext: string
//     mime: string
//     size: number
//     url: string
//     previewUrl: any
//     provider: string
//     provider_metadata: any
//     createdAt: string
//     updatedAt: string
// }

export interface IContacts {
    id: number,
    email: string,
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
}

// export interface ISlide {
//     id: number,
//     attributes: {
//         link: string,
//         title: string,
//         text: string,
//         textColor: string,
//         image: {
//             url: string,
//             alt: string
//         }
//     }
// }