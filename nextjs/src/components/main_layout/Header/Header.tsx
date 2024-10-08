'use client'

import Link from 'next/link';
import styles from './Header.module.scss';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { DropMenu } from '../DropMenu/DropMenu';
import { getAllCategories } from '@/api/getData';
import { HeaderProps } from './Header.props';
import Image from 'next/image';
import { Search } from '@/components/Search/Search';
import { DropLink } from '@/components/DropLink/DropLink';
import { DropData } from '@/components/DropLink/DropLink.props';

// const getCategories = async () => {
//     const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories' + '?populate=*');
//     const res = await data.json();
//     return res.data;
// }

// const getTools = async (catId: number) => {
//     const data = await fetch(process.env.NEXT_PUBLIC_BACK_DOMAIN + '/api/categories/' + String(catId) + '?populate=*');
//     const res = await data.json();
//     return res.data.attributes.tools.data;
// }


type Tool = {
    includedIds: string[]
}

const tools = {
    electro: ['Болгарка'],
    benzo: [],
    garden: [],
    compressors: [],
    generators: [],
    welding: [],
    heatguns: [],
    rest: [],
}

const foundTypes = {
    type: [],
    category: [],
    id: []
}

const foundServices = {
    type: [],
    category: [],
    id: []
}

const contactsSettings = {
    phoneNumber: '12314141'
}


export const Header = ({ categories, contacts }: HeaderProps) => {
    const [dropData, setDropData] = useState<DropData[]>();
    // const categories = await getAllCategories();
    // const [categories, setCategories] = useState<ICategory[]>();
    // getCategories().then(res => {
    //     console.log(res);
    // })
    useEffect(() => {
        const dropData: DropData[] = categories.map(cat => {
            const dropData = cat.attributes.tools.data.map(tool => {
                return {
                    text: tool.attributes.title,
                    href: `/tools/${cat.id}/${tool.id}`
                }
            });
            return {
                text: cat.attributes.title,
                href: `/tools/${cat.id}`,
                dropData: dropData
            }
        });
        setDropData(dropData);
    }, []);


    const [dropMenuFlag, setDropMenuFlag] = useState(false);
    // const [sideElectro, setSideElectro] = useState(false);
    // const [sideFuel, setSideFuel] = useState(false);
    // const [sideGarden, setSideGarden] = useState(false);
    // const [sideCompressors, setSideCompressors] = useState(false);
    // const [sideGenerators, setSideGenerators] = useState(false);
    // const [sideWelding, setSideWelding] = useState(false);
    // const [sideHeatguns, setSideHeatguns] = useState(false);
    // const [sideRest, setSideRest] = useState(false);
    const [burger, setBurger] = useState(false);
    const [resultHover, setResultHover] = useState(false);

    const [searchMobile, setSearchMobile] = useState(false);
    const [searchPlaceholder, setSearchPlaceholder] = useState('');
    const [searchFocuse, setSearchFocuse] = useState(false);

    // const [type, setType] = useState();
    // const [service, setService] = useState();

    const [searchValue, setSearchValue] = useState('');
    const [searchTypes, setSearchTypes] = useState<string[]>([]);
    const [searchServices, setSearchServices] = useState<string[]>([]);

    const searchRef = useRef<HTMLInputElement>(null);

    const dropMenuHide = () => {

    }

    const arrowDown = (type: string) => {
        if (window.matchMedia("(hover: hover)").matches) {
            setDropMenuFlag(true);
        } else {
            if (type == 't')
                setDropMenuFlag(!dropMenuFlag);
        }
    }

    // const arrowRight = (type: string) => {

    // }

    const searchTool = () => {

    }

    const resetSearch = () => {

    }

    return (
        <header className={styles.header}>
            <div className={styles.header__topper}>
                <span className={styles.header__hours}>График работы: пн-пт 10:00-20:00</span>
                <Link className={styles.header__adress} target="_blank" href="https://yandex.ru/maps/-/CCUEb2QElD">Наш адрес: г.Москва, МГСА
                    №256</Link>
                <Link className={styles["header__mob-phone"]} href="tel: {{contactsSettings$.phoneNumber}}">
                    {/* {/ {{ contactsSettings$.phoneNumber }} /} */}
                </Link>
                {/* {/ <app-send-request></app - send - request > /} */}
            </div>
            <nav className={cn(styles.header__nav, styles.nav)}>
                <Link
                    className={styles.header__logo}
                    href="/"
                // routerLinkActive='active'
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
                        className={cn(styles.nav__item, { [styles.nav__item_hover]: dropMenuFlag })}
                        // className="{'nav__item': true, 'nav__item_hover': dropMenuFlag}"
                        // routerLinkActive='active'
                        onMouseEnter={() => arrowDown('h')}
                        onMouseLeave={() => setDropMenuFlag(false)}
                    >
                        {/* <Link className={cn(styles.nav__link, styles.drop)} href="/tools" onClick={() => dropMenuHide()}>
                            Инструменты
                        </Link>
                        <div className={styles["arrow-down"]} onClick={() => arrowDown('t')}>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 2L6.5 7L1.5 2" stroke="black" strokeWidth="3" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div> */}
                        <DropLink href={"/tools"} dropData={dropData}>
                            Инструменты
                        </DropLink>
                        {/* {dropMenuFlag && !!categories &&
                            <DropMenu categories={categories} />
                        } */}
                    </li>
                    <li
                        className={styles["nav__item"]}
                    // routerLinkActive='active'
                    >
                        <Link className={styles.nav__link} href="/delivery">Доставка и оплата</Link>
                    </li>
                    <li
                        className={styles["nav__item"]}
                    // routerLinkActive='active'
                    >
                        <Link className={styles.nav__link} href="/contacts">Контакты</Link>
                    </li>
                    {!searchMobile && <li className={styles.header__search}>
                        {/* <form formGroup="searchForm" onInput={() => searchTool()}> */}
                        {/* <form name="searchForm" onInput={() => searchTool()}>
                            <input
                                ref={searchRef}
                                // formControlName="data"
                                // ngModel="this.searchForm.value.data"
                                id="search"
                                type="search"
                                placeholder={searchPlaceholder}
                                onFocus={() => setSearchFocuse(true)}
                                onBlur={() => setSearchFocuse(false)}
                                onChange={e => setSearchValue(e.target.value)}
                            />
                        </form> */}
                        <Search />
                        {!searchValue && <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.9399 18.5624L13.4474 12.0699C14.4549 10.7675 14.9999 9.17496 14.9999 7.49997C14.9999 5.49498 14.2174 3.61498 12.8024 2.19749C11.3874 0.779996 9.50246 0 7.49997 0C5.49748 0 3.61248 0.782496 2.19749 2.19749C0.779996 3.61248 0 5.49498 0 7.49997C0 9.50246 0.782496 11.3874 2.19749 12.8024C3.61248 14.2199 5.49498 14.9999 7.49997 14.9999C9.17496 14.9999 10.765 14.4549 12.0674 13.4499L18.5599 19.9399C18.579 19.959 18.6016 19.9741 18.6264 19.9844C18.6513 19.9947 18.678 20 18.7049 20C18.7318 20 18.7585 19.9947 18.7834 19.9844C18.8083 19.9741 18.8309 19.959 18.8499 19.9399L19.9399 18.8524C19.959 18.8334 19.9741 18.8108 19.9844 18.7859C19.9947 18.761 20 18.7343 20 18.7074C20 18.6805 19.9947 18.6538 19.9844 18.6289C19.9741 18.6041 19.959 18.5815 19.9399 18.5624ZM11.46 11.46C10.4 12.5174 8.99496 13.0999 7.49997 13.0999C6.00497 13.0999 4.59998 12.5174 3.53998 11.46C2.48249 10.4 1.89999 8.99496 1.89999 7.49997C1.89999 6.00497 2.48249 4.59748 3.53998 3.53998C4.59998 2.48249 6.00497 1.89999 7.49997 1.89999C8.99496 1.89999 10.4025 2.47999 11.46 3.53998C12.5174 4.59998 13.0999 6.00497 13.0999 7.49997C13.0999 8.99496 12.5174 10.4025 11.46 11.46Z"
                                fill="#131522" />
                        </svg>}
                        {!!searchValue && <button className={styles["search-reset"]} onClick={() => resetSearch()}>
                        </button>}
                        {((searchFocuse || resultHover) && !!searchValue) &&
                            <div
                                className={cn(styles["side-drop-menu"], styles["search-result"])}
                            // ngIf="(searchFocuse || resultHover) && !!searchForm.value.data"
                            >
                                {/* <app-top-preloader ngIf="searchPreloader"></app> - top - preloader > */}
                                {(searchTypes.length < 1) &&
                                    <p>
                                        Ничего не найдено
                                    </p>
                                }
                                {(foundTypes.type.length > 0) &&
                                    <>
                                        <h4> Инструменты</h4>
                                        {foundTypes.type.map((type, i) => {
                                            return (
                                                <div key={`type-${i}`}>
                                                    <Link href="['tools', types.category[i], types.id[i]]" onClick={() => setResultHover(false)}
                                                        onMouseOver={() => setResultHover(true)} onMouseOut={() => setResultHover(false)}>
                                                        {type}
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </>}
                                {(foundServices.type.length > 0) && <>
                                    <h4>Услуги</h4>
                                    {foundServices.type.map((service, i) => {
                                        return (
                                            <div key={`service-${i}`}>
                                                <Link href="['tools', services.category[i], services.id[i]]" onClick={() => setResultHover(false)}
                                                    onMouseOver={() => setResultHover(true)} onMouseOut={() => setResultHover(false)}>
                                                    {service}
                                                </Link>
                                            </div>
                                        )
                                    })}

                                </>}
                            </div>}
                    </li>}
                    <li className={styles.header__phone}>
                        <Link href={`tel: ${contacts.attributes.phoneNumber}`}>
                            <Image
                                src="/phone-icon.svg"
                                alt=""
                                width="26"
                                height="26"
                            />
                            {contacts.attributes.phoneNumber}
                        </Link>
                    </li>
                </ul>
                {/* MOBILE SEARCH START */}
                {searchMobile && <div className={styles.header__search}>
                    {/* <form
                        // formGroup="searchForm"
                        onInput={() => searchTool()}>
                        <input ref={searchRef}
                            // formControlName="data"
                            // ngModel="this.searchForm.value.data"
                            id="search"
                            type="search"
                            placeholder={searchPlaceholder}
                            onFocus={() => {
                                setSearchFocuse(true);
                                setBurger(false);
                            }}
                            onBlur={() => setSearchFocuse(false)} />
                    </form> */}
                    <Search />
                    {!searchValue && <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.9399 18.5624L13.4474 12.0699C14.4549 10.7675 14.9999 9.17496 14.9999 7.49997C14.9999 5.49498 14.2174 3.61498 12.8024 2.19749C11.3874 0.779996 9.50246 0 7.49997 0C5.49748 0 3.61248 0.782496 2.19749 2.19749C0.779996 3.61248 0 5.49498 0 7.49997C0 9.50246 0.782496 11.3874 2.19749 12.8024C3.61248 14.2199 5.49498 14.9999 7.49997 14.9999C9.17496 14.9999 10.765 14.4549 12.0674 13.4499L18.5599 19.9399C18.579 19.959 18.6016 19.9741 18.6264 19.9844C18.6513 19.9947 18.678 20 18.7049 20C18.7318 20 18.7585 19.9947 18.7834 19.9844C18.8083 19.9741 18.8309 19.959 18.8499 19.9399L19.9399 18.8524C19.959 18.8334 19.9741 18.8108 19.9844 18.7859C19.9947 18.761 20 18.7343 20 18.7074C20 18.6805 19.9947 18.6538 19.9844 18.6289C19.9741 18.6041 19.959 18.5815 19.9399 18.5624ZM11.46 11.46C10.4 12.5174 8.99496 13.0999 7.49997 13.0999C6.00497 13.0999 4.59998 12.5174 3.53998 11.46C2.48249 10.4 1.89999 8.99496 1.89999 7.49997C1.89999 6.00497 2.48249 4.59748 3.53998 3.53998C4.59998 2.48249 6.00497 1.89999 7.49997 1.89999C8.99496 1.89999 10.4025 2.47999 11.46 3.53998C12.5174 4.59998 13.0999 6.00497 13.0999 7.49997C13.0999 8.99496 12.5174 10.4025 11.46 11.46Z"
                            fill="#131522" />
                    </svg>}
                    {searchValue && <button className={styles['search-reset']} onClick={() => resetSearch()}>
                    </button>}
                </div>
                }
                {/* MOBILE SEARCH END */}

                {((searchFocuse || resultHover) && !!searchValue && searchMobile) &&
                    <div className={cn(styles["side-drop-menu"], styles["search-result"])}>
                        {(searchTypes.length < 1) && <p>
                            Ничего не найдено
                        </p>}
                        {(foundTypes.type.length > 0) && <>
                            <h4> Инструменты</h4>
                            {foundTypes.type.map((type, i) => {
                                return (
                                    <div key={`type-${i}`}>
                                        <Link href="['tools', types.category[i], types.id[i]]" onClick={() => setResultHover(false)}
                                            onMouseOver={() => setResultHover(true)} onMouseOut={() => setResultHover(false)}>
                                            {type}
                                        </Link>
                                    </div>
                                )
                            })}

                        </>
                        }
                        {(foundServices.type.length > 0) &&
                            <>
                                <h4>Услуги</h4>
                                {foundServices.type.map((service, i) => {
                                    return (
                                        <div key={`service-${i}`}>
                                            <Link href="['tools', services.category[i], services.id[i]]" onClick={() => setResultHover(false)}
                                                onMouseOver={() => setResultHover(true)} onMouseOut={() => setResultHover(false)}>
                                                {service}
                                            </Link>
                                        </div>
                                    )
                                })}
                            </>
                        }
                    </div>
                }
                {searchMobile &&
                    <>
                        <input id="burger" type="checkbox" onChange={(e) => setBurger(e.target.checked)} />
                        <label htmlFor="burger" className={styles.header__nav_mobile}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </label>
                    </>
                }
            </nav>
            {
                searchMobile &&
                <nav className={cn("mobile__nav", { 'mobile__nav_visible': burger })}>
                    <Link href="['tools', 'electro']" onClick={() => setBurger(false)}> Электроинструмент</Link>
                    <Link href="['tools', 'benzo']" onClick={() => setBurger(false)}> Бензоинструмент</Link>
                    <Link href="['tools', 'welding']" onClick={() => setBurger(false)}> Сварочные аппараты</Link>
                    <Link href="['tools', 'generator']" onClick={() => setBurger(false)}> Генераторы</Link>
                    <Link href="['tools', 'compressor']" onClick={() => setBurger(false)}> Компрессоры</Link>
                    <Link href="['tools', 'rest']" onClick={() => setBurger(false)}> Техника для отдыха</Link>
                    <Link href="['tools', 'garden']" onClick={() => setBurger(false)}> Садовая техника</Link>
                    <Link href="['tools', 'heatgun']" onClick={() => setBurger(false)}> Тепловые пушки</Link>
                    <Link href="['delivery']" onClick={() => setBurger(false)}> Доставка и оплата</Link>
                    <Link href="['contacts']" onClick={() => setBurger(false)}> Контакты</Link>
                </nav>
            }

        </header >
    )
}