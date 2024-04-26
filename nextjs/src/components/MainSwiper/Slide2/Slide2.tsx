import Image from 'next/image';

import styles from './Slide2.module.css';

export const Slide2 = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h4 className={styles.title}>
                    Качественная диагностика
                </h4>
                <p className={styles.text}>
                    Во время проведения диагностики <br />
                    наши специальсты проверяют <br />
                    инструмент на все возможные <br />
                    неисправности
                </p>
            </div>
            <Image
                className={styles.img}
                src={'/diagnostic.jpg'}
                alt='Фото мастера поремонту инструмента'
                width={802}
                height={340}
                objectFit='cover'
            />
        </>
    );
}