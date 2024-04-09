import { WeRepairBlock } from "@/components/WeRepairBlock/WeRepairBlock";
import styles from './page.module.scss';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Ремтул | Инструменты',
    description: 'Страница с категориями инструментов, которые ремонтирут компания Ремтул',
}

export default function Tools() {
    return (
        <main>
            <h1 className={styles.title}>
                Мы ремонтируем
            </h1>
            <WeRepairBlock className={styles.we_repair_block} />
        </main>
    )
}