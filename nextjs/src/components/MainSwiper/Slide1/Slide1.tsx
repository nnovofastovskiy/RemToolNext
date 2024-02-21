import Image from 'next/image';

import styles from './Slide1.module.css';

export const Slide1 = () => {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>
                Срочная консультация
            </h4>
            <p className={styles.text}>
                Наши специалисты ответят <br />
                на интересующие Вас вопросы и <br />
                помогут определиться с ремонтом <br />
                и ценами
            </p>
            <a href="">
                <Image
                    src={'/whatsapp.png'}
                    alt=''
                    width={50}
                    height={50}
                />
            </a>
            <Image
                className={styles.img}
                src={'/consult.jpg'}
                alt='Фото мастера поремонту инструмента'
                width={802}
                height={340}
            />
        </div>
    );
}