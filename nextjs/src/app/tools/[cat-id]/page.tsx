import { getCategory, getAllToolsInCat } from '@/api/getData';
import styles from './page.module.scss';
import { ToolCard } from '@/components/ToolCard/ToolCard';
import router from 'next/router';

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: {
        'cat-id': string
    }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const catId = parseInt(params['cat-id']);
    const category = await getCategory(catId);
    if (!category) return {
        title: 'Ошибка'
    }
    console.log(category);


    // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json())

    // // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: category.attributes.title,
        openGraph: {
            images: [process.env.NEXT_PUBLIC_BACK_DOMAIN + category.attributes.image.data.attributes.url],
        },
    }
}

export default async function Category({ params }: { params: { 'cat-id': string } }) {
    const catId = parseInt(params['cat-id']);
    const category = await getAllToolsInCat(catId);
    const tools = category.attributes.tools.data;
    return (
        <main>
            <h1 className={styles.title}>
                {category.attributes.title}
            </h1>
            <section className={styles.tools}>
                {tools.map(tool => {
                    return (
                        <ToolCard
                            key={`toolCard-${tool.id}`}
                            catId={catId}
                            tool={tool}
                        />
                    )
                })}
            </section>
        </main>
    )
}