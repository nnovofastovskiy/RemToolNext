'use client'

import { Button } from '@/components/Button/Button';
import styles from './page.module.scss';


export default function Error({
    error,
    reset
}: {
    error: Error,
    reset: () => void
}) {
    return (
        <main
            className={styles.error_page}
        >
            <h2
                className={styles.error_title}
            >
                Такой категории не существует
            </h2>
            <Button
                type='primary'
                className={styles.error_button}
                onClick={() => window.history.back()}
            >
                Назад
            </Button>
        </main>
    )
}