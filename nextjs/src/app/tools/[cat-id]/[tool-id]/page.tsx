import { getCategory, getAllToolsInCat } from '@/api/getData';
import styles from './page.module.scss';
import { ToolCard } from '@/components/ToolCard/ToolCard';

export default async function Tool({ params }: { params: { 'tool-id': string } }) {
    const toolId = parseInt(params['tool-id']);
    // const category = await getAllToolsInCat(catId);
    // const tools = category.attributes.tools.data;
    return (
        <main>
            <h1 className={styles.title}>
                {toolId}
            </h1>
        </main>
    )
}