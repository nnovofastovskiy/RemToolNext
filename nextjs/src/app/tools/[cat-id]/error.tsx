'use client'

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
            >Такой категории не существует</h2>
            <button
                className={styles.error_button}
                onClick={() => window.history.back()}
            >Назад</button>
        </main>
    )
}