import { ICategory, IContacts, ITool } from "@/helpers/api.interfaces"

export const getAllCategories = async (): Promise<ICategory[]> => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories' + '?populate=*', { method: "GET" });
    const res = await data.json();
    return res.data;
}

export const getCategory = async (catId: number): Promise<ICategory> => {
    // const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories/' + String(catId) + '?populate=*', { method: "GET" });
    const response = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories/' + String(catId) + '?populate=*', { method: "GET" })
        .catch(e => { throw new Error("Что-то пошло не так") });
    const res = await response.json();
    if (response.status === 200) {
        const data = res?.data;
        if (data) {
            return data;
        } else {
            throw new Error("Такой категории не существует");
        }
    } else if (response.status === 404) {
        throw new Error("Такой категории не существует");
    } else {
        throw new Error("Что-то пошло не так");
    }
}

export const getAllToolsInCat = async (catId: number): Promise<ICategory> => {
    // const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories/' + String(catId) + '?populate=*', { method: "GET" });
    const response = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories/' + String(catId) + '?populate[tools][populate][0]=image', { method: "GET" })
        .catch(e => { throw new Error("Что-то пошло не так") });
    const res = await response.json();
    if (response.status === 200) {
        const data = res?.data;
        if (data) {
            return data;
        } else {
            throw new Error("Такой категории не существует");
        }
    } else if (response.status === 404) {
        throw new Error("Такой категории не существует");
    } else {
        throw new Error("Что-то пошло не так");
    }
}

export const getContacts = async (): Promise<IContacts> => {
    const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/contacts', { method: "GET" });
    const res = await data.json();
    return res.data;
}

// export const getSlides = async (): Promise<ISlide[]> => {
//     const data = await fetch('http://127.0.0.1:1337/api/slides?populate=image', { method: "GET" });
//     const res = await data.json();
//     // console.log(res.data);

//     // const slides: ISlide[] = []

//     const slides: ISlide[] = res.data.map((slide: any) => {
//         // console.log(slide);

//         return {
//             id: slide.id,
//             attributes: {
//                 link: slide.attributes.link,
//                 title: slide.attributes.title,
//                 text: slide.attributes.text,
//                 textColor: slide.attributes.textColor,
//                 image: {
//                     url: slide.attributes.image.data.attributes.url,
//                     alt: slide.attributes.image.data.attributes.alternativeText,
//                     // url: 'esrgserg',
//                     // alt: 'sergserg'
//                 }
//             }
//         }
//     })
//     // console.log('getSlides');

//     return slides;
// }

export const getTool = async (toolId: number): Promise<ITool> => {
    // const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/tools/' + String(toolId) + '?populate=*', { method: "GET" });
    // const res = await data.json();
    // return res.data;
    const response = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/tools/' + String(toolId) + '?populate=*', { method: "GET" })
        .catch(e => { throw new Error("Что-то пошло не так") });
    const res = await response.json();
    if (response.status === 200) {
        const data = res?.data;
        if (data) {
            return data;
        } else {
            throw new Error("Такого инструмента не существует");
        }
    } else if (response.status === 404) {
        throw new Error("Такого инструмента не существует");
    } else {
        throw new Error("Что-то пошло не так");
    }
}