'use client'

import Link from 'next/link';
import styles from './Header.module.scss';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { getAllCategories } from '@/api/getData';
import { HeaderProps } from './Header.props';
import Image from 'next/image';
import { Search } from '@/components/Search/Search';
import { DropLink } from '@/components/DropLink/DropLink';
import { DropData } from '@/components/DropLink/DropLink.props';

export const Header = ({ categories, contacts }: HeaderProps) => {
    const [dropData, setDropData] = useState<DropData[]>();
    useEffect(() => {
        const dropData: DropData[] = categories.map(cat => {
            const dropData = cat.tools.map(tool => {
                return {
                    text: tool.title,
                    href: `/tools/${cat.documentId}/${tool.documentId}`,
                }
            });
            return {
                text: cat.title,
                href: `/tools/${cat.documentId}`,
                dropData: dropData
            }
        });
        setDropData(dropData);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.header__topper}>
                <span className={styles.header__hours}>График работы: пн-пт 10:00-20:00</span>
                <Link className={styles.header__adress} target="_blank" href="https://yandex.ru/maps/-/CCUEb2QElD">Наш адрес: г.Москва, МГСА
                    №256</Link>
                <Link className={styles["header__mob-phone"]} href="tel: {{contactsSettings$.phoneNumber}}">
                </Link>
            </div>
            <nav className={cn(styles.header__nav, styles.nav)}>
                <Link
                    className={styles.header__logo}
                    href="/"
                >
                    <Image
                        src="/header__logo.svg"
                        alt="logo"
                        width="129"
                        height="120"
                    />
                </Link>
                <ul className={styles.nav_ul}>
                    <li
                        className={cn(styles.nav__item)}
                    >
                        <DropLink href={"/tools"} dropData={dropData}>
                            Инструменты
                        </DropLink>
                    </li>
                    <li
                        className={styles["nav__item"]}
                    >
                        <Link className={styles.nav__link} href="/delivery">Доставка и оплата</Link>
                    </li>
                    <li
                        className={styles["nav__item"]}
                    >
                        <Link className={styles.nav__link} href="/contacts">Контакты</Link>
                    </li>

                    <li>
                        <Search />
                    </li>
                    <li className={styles.header__phone}>
                        <Link href={`tel: ${contacts.phoneNumber}`}>
                            <Image
                                src="/phone-icon.svg"
                                alt=""
                                width="26"
                                height="26"
                            />
                            {contacts.phoneNumber}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header >
    )
}