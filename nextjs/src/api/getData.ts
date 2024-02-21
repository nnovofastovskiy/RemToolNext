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

export interface ICategory {
    id: number,
    attributes: {
        title: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        tools: {
            data: ITool[]
        }
    }
}

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

export const getAllCategories = async (): Promise<ICategory[]> => {
    const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories' + '?populate=*');
    const res = await data.json();
    return res.data;
}

export const getAllData = async (catId: number): Promise<ITool[]> => {
    const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories/' + String(catId) + '?populate=*');
    const res = await data.json();
    return res.data.attributes.tools.data;
}

export const getContacts = async (): Promise<IContacts> => {
    const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/contacts');
    const res = await data.json();
    return res.data;
}

export const getSlides = async (): Promise<ISlide[]> => {
    const data = await fetch('http://127.0.0.1:1337/api/slides?populate=image');
    const res = await data.json();
    console.log(res.data);

    // const slides: ISlide[] = []

    const slides: ISlide[] = res.data.map((slide: any) => {
        console.log(slide);

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