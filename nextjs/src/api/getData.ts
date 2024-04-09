// export interface ITool {
//     id: number,
//     attributes: {
//         title: string,
//         seoTitle: string
//         pricelist: string,
//         createdAt: string,
//         updatedAt: string,
//         publishedAt: string,
//     }
// }

import { ICategory, ITool } from "@/helpers/api.interfaces"
import axios from "axios"

// export interface ICategory {
//     id: number,
//     attributes: {
//         title: string,
//         createdAt: string,
//         updatedAt: string,
//         publishedAt: string,
//         tools: {
//             data: ITool[]
//         }
//     }
// }

export interface IContacts {
    id: number,
    attributes: {
        email: string,
        phoneNumber: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
    }
}

export interface ISlide {
    id: number,
    attributes: {
        link: string,
        title: string,
        text: string,
        textColor: string,
        image: {
            url: string,
            alt: string
        }
    }
}

// export const getAllCategories = async (): Promise<ICategory[]> => {
//     const { data } = await axios('http://127.0.0.1:1337/api/categories?populate=*');
//     // const res = await data;
//     console.log('GET ALL CATEGORIES');
//     console.log(data);

//     return data.data;
// }
export const getAllCategories = async (): Promise<ICategory[]> => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories' + '?populate=*', { method: "GET" });
    const res = await data.json();
    return res.data;
}

export const getCategory = async (catId: number): Promise<ICategory> => {
    const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories/' + String(catId) + '?populate=*', { method: "GET" });
    const res = await data.json();
    return res.data;
}

export const getAllToolsInCat = async (catId: number): Promise<ICategory> => {
    const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories/' + String(catId) + '?populate[tools][populate][0]=image', { method: "GET" });
    const res = await data.json();
    return res.data;
}

export const getContacts = async (): Promise<IContacts> => {
    const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/contacts', { method: "GET" });
    const res = await data.json();
    return res.data;
}

export const getSlides = async (): Promise<ISlide[]> => {
    const data = await fetch('http://127.0.0.1:1337/api/slides?populate=image', { method: "GET" });
    const res = await data.json();
    console.log(res.data);

    // const slides: ISlide[] = []

    const slides: ISlide[] = res.data.map((slide: any) => {
        // console.log(slide);

        return {
            id: slide.id,
            attributes: {
                link: slide.attributes.link,
                title: slide.attributes.title,
                text: slide.attributes.text,
                textColor: slide.attributes.textColor,
                image: {
                    url: slide.attributes.image.data.attributes.url,
                    alt: slide.attributes.image.data.attributes.alternativeText,
                    // url: 'esrgserg',
                    // alt: 'sergserg'
                }
            }
        }
    })
    // console.log('getSlides');

    return slides;
}