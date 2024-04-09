import { getCategory, getAllToolsInCat } from '@/api/getData';
import styles from './page.module.scss';
import { ToolCard } from '@/components/ToolCard/ToolCard';

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ремтул | Инструменты',
    description: '...',
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