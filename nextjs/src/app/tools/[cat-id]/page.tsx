import { getAllCategories, getAllToolsInCat } from '@/api/getData';
import styles from './page.module.scss';
import { ToolCard } from '@/components/ToolCard/ToolCard';
import router from 'next/router';

import type { Metadata, ResolvingMetadata } from 'next'
import { ICategory } from '@/helpers/api.interfaces';

export async function generateStaticParams() {
    const categories = await getAllCategories();
    return categories.map(cat => cat.documentId);
}

export default async function Category({ params }: { params: { 'cat-id': string } }) {
    const catId = params['cat-id'];
    const category = await getAllToolsInCat(catId);
    const tools = category.tools;
    return (
        <main>
            <h1 className={styles.title}>
                {category.title}
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