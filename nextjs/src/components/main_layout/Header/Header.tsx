'use client'

import Link from 'next/link';
import styles from './Header.module.css';
import cn from 'classnames';
import { useRef, useState } from 'react';

type Tool = {
    includedIds: string[]
}

const tools = {
    electro: [],
    benzo: [],
    garden: [],
    compressors: [],
    generators: [],
    welding: [],
    heatguns: [],
    rest: [],
}

const types = {
    type: [],
    category: [],
    id: []
}

const services = {
    type: [],
    category: [],
    id: []
}

const contactsSettings = {
    phoneNumber: '12314141'
}

export const Header = () => {
    const [dropMenuFlag, setDropMenuFlag] = useState(false);
    const [sideElectro, setSideElectro] = useState(false);
    const [sideFuel, setSideFuel] = useState(false);
    const [sideGarden, setSideGarden] = useState(false);
    const [sideCompressors, setSideCompressors] = useState(false);
    const [sideGenerators, setSideGenerators] = useState(false);
    const [sideWelding, setSideWelding] = useState(false);
    const [sideHeatguns, setSideHeatguns] = useState(false);
    const [sideRest, setSideRest] = useState(false);
    const [burger, setBurger] = useState(false);
    const [resultHover, setResultHover] = useState(false);

    const [searchMobile, setSearchMobile] = useState(false);
    const [searchPlaceholder, setSearchPlaceholder] = useState('');
    const [searchFocuse, setSearchFocuse] = useState(false);

    const [type, setType] = useState();
    const [service, setService] = useState();

    const [searchValue, setSearchValue] = useState('');
    const [searchTypes, setSearchTypes] = useState<string[]>([]);
    const [searchServices, setSearchServices] = useState<string[]>([]);

    const searchRef = useRef<HTMLInputElement>(null);

    const dropMenuHide = () => {

    }

    const arrowDown = (type: string) => {

    }

    const arrowRight = (type: string) => {

    }

    const searchTool = () => {

    }

    const resetSearch = () => {

    }

    return (
        <header className="header">
            <div className="header__topper">
                <span className="header__hours">График работы: пн-пт 10:00-20:00</span>
                <Link className="header__adress" target="_blank" href="https://yandex.ru/maps/-/CCUEb2QElD">Наш адрес: г.Москва, МГСА
                    №256</Link>
                <Link className="header__mob-phone" href="tel: {{contactsSettings$.phoneNumber}}">
                    {/* {/ {{ contactsSettings$.phoneNumber }} /} */}
                </Link>
                {/* {/ <app-send-request></app - send - request > /} */}
            </div>
            <nav className="header__nav nav">
                <Link
                    className="header__logo"
                    href="/"
                // routerLinkActive='active'
                >
                    <img src="assets/img/header__logo.svg" alt="logo" />
                </Link>
                <ul>
                    <li
                        className="{'nav__item': true, 'nav__item_hover': dropMenuFlag}"
                        // routerLinkActive='active'
                        onMouseEnter={() => arrowDown('h')}
                        onMouseLeave={() => setDropMenuFlag(false)}
                    >
                        <Link className="nav__link drop" href="tools" onClick={() => dropMenuHide()}>
                            Инструменты
                        </Link>
                        <div className="arrow-down" onClick={() => arrowDown('t')}>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 2L6.5 7L1.5 2" stroke="black" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        {dropMenuFlag &&
                            <div className="drop-menu">
                                <div>
                                    <div
                                        className="{'drop-menu__item': true, 'drop-menu__item_hover': sideElectro}"
                                        onMouseEnter={() => arrowRight('electrom')}
                                        onMouseLeave={() => setSideElectro(false)}
                                        onClick={() => arrowRight('electro')}
                                    >
                                        <Link
                                            className="drop-menu__link"
                                            href="tools/electro"
                                            onClick={() => dropMenuHide()}
                                        >
                                            Электроинструмент
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        {sideElectro && <div className="side-drop-menu">
                                            {tools.electro.map((tool, i) => {
                                                return (
                                                    <Link
                                                        key={`electro-${i}`}
                                                        href="['tools', 'electro', this.tools.electro.includedIds[i]]"
                                                        onClick={() => dropMenuHide()}
                                                    >
                                                        {tool}
                                                    </Link>
                                                );
                                            })}
                                        </div>}
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideFuel}"
                                        onMouseEnter={() => arrowRight('benzom')} onMouseLeave={() => setSideFuel(false)}
                                        onClick={() => arrowRight('benzo')}>
                                        <Link className="drop-menu__link" href="['tools', 'benzo']" onClick={() => dropMenuHide()}>
                                            Бензоинструмент
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        {sideFuel && <div className="side-drop-menu">
                                            {tools.benzo.map((tool, i) => {
                                                return (
                                                    <Link
                                                        key={`benzo-${i}`}
                                                        href="['tools', 'benzo', this.tools.benzo.includedIds[i]]"
                                                        onClick={() => dropMenuHide()}
                                                    >
                                                        {tool}
                                                    </Link>
                                                );
                                            })}
                                        </div>}
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideGarden}"
                                        onMouseEnter={() => arrowRight('gardenm')} onMouseLeave={() => setSideGarden(false)}
                                        onClick={() => arrowRight('garden')}>
                                        <Link className="drop-menu__link" href="['tools', 'garden']" onClick={() => dropMenuHide()}>
                                            Садовая техника
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        {sideGarden && <div className="side-drop-menu">
                                            {tools.garden.map((tool, i) => {
                                                return (
                                                    <Link
                                                        key={`garden-${i}`}
                                                        href="['tools', 'garden', this.tools.garden.includedIds[i]]"
                                                        onClick={() => dropMenuHide()}
                                                    >
                                                        {tool}
                                                    </Link>
                                                );
                                            })}
                                        </div>}
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideCompressors}"
                                        onMouseEnter={() => arrowRight('compressorm')} onMouseLeave={() => setSideCompressors(false)}
                                        onClick={() => arrowRight('compressor')}>
                                        <Link className="drop-menu__link" href="['tools', 'compressor']" onClick={() => dropMenuHide()}>
                                            Компрессоры
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        {sideCompressors && <div className="side-drop-menu">
                                            {tools.compressors.map((tool, i) => {
                                                return (
                                                    <Link
                                                        key={`compressors-${i}`}
                                                        href="['tools', 'compressors', this.tools.compressors.includedIds[i]]"
                                                        onClick={() => dropMenuHide()}
                                                    >
                                                        {tool}
                                                    </Link>
                                                );
                                            })}
                                        </div>}
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideGenerators}"
                                        onMouseEnter={() => arrowRight('generatorm')} onMouseLeave={() => setSideGenerators(false)}
                                        onClick={() => arrowRight('generator')}>
                                        <Link className="drop-menu__link" href="['tools', 'generator']" onClick={() => dropMenuHide()}>
                                            Генераторы
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        {sideGenerators && <div className="side-drop-menu">
                                            {tools.generators.map((tool, i) => {
                                                return (
                                                    <Link
                                                        key={`generators-${i}`}
                                                        href="['tools', 'generators', this.tools.generators.includedIds[i]]"
                                                        onClick={() => dropMenuHide()}
                                                    >
                                                        {tool}
                                                    </Link>
                                                );
                                            })}
                                        </div>}
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideWelding}"
                                        onMouseEnter={() => arrowRight('weldingm')} onMouseLeave={() => setSideWelding(false)}
                                        onClick={() => arrowRight('welding')}>
                                        <Link className="drop-menu__link" href="['tools', 'welding']" onClick={() => dropMenuHide()}>
                                            Сварочная техника
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        {sideWelding && <div className="side-drop-menu">
                                            {tools.welding.map((tool, i) => {
                                                return (
                                                    <Link
                                                        key={`welding-${i}`}
                                                        href="['tools', 'welding', this.tools.welding.includedIds[i]]"
                                                        onClick={() => dropMenuHide()}
                                                    >
                                                        {tool}
                                                    </Link>
                                                );
                                            })}
                                        </div>}
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideHeatguns}"
                                        onMouseEnter={() => arrowRight('heatgunm')} onMouseLeave={() => setSideHeatguns(false)}
                                        onClick={() => arrowRight('heatgun')}>
                                        <Link className="drop-menu__link" href="['tools', 'heatgun']" onClick={() => dropMenuHide()}>
                                            Тепловые пушки
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        {sideHeatguns && <div className="side-drop-menu">
                                            {tools.heatguns.map((tool, i) => {
                                                return (
                                                    <Link
                                                        key={`heatguns-${i}`}
                                                        href="['tools', 'heatguns', this.tools.heatguns.includedIds[i]]"
                                                        onClick={() => dropMenuHide()}
                                                    >
                                                        {tool}
                                                    </Link>
                                                );
                                            })}
                                        </div>}
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideRest}"
                                        onMouseEnter={() => arrowRight('restm')} onMouseLeave={() => setSideRest(false)}
                                        onClick={() => arrowRight('rest')}>
                                        <Link className="drop-menu__link" href="['tools', 'rest']" onClick={() => dropMenuHide()}>
                                            Техника для отдыха
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        {sideRest && <div className="side-drop-menu">
                                            {tools.rest.map((tool, i) => {
                                                return (
                                                    <Link
                                                        key={`rest-${i}`}
                                                        href="['tools', 'rest', this.tools.rest.includedIds[i]]"
                                                        onClick={() => dropMenuHide()}
                                                    >
                                                        {tool}
                                                    </Link>
                                                );
                                            })}
                                        </div>}
                                    </div>
                                </div>
                            </div>}
                    </li>
                    <li
                        className="nav__item"
                    // routerLinkActive='active'
                    >
                        <Link className="nav__link" href="['delivery']">Доставка и оплата</Link>
                    </li>
                    <li
                        className="nav__item"
                    // routerLinkActive='active'
                    >
                        <Link className="nav__link" href="['contacts']">Контакты</Link>
                    </li>
                    {!searchMobile && <li className="header__search">
                        {/* <form formGroup="searchForm" onInput={() => searchTool()}> */}
                        <form name="searchForm" onInput={() => searchTool()}>
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
                        </form>
                        {!searchValue && <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.9399 18.5624L13.4474 12.0699C14.4549 10.7675 14.9999 9.17496 14.9999 7.49997C14.9999 5.49498 14.2174 3.61498 12.8024 2.19749C11.3874 0.779996 9.50246 0 7.49997 0C5.49748 0 3.61248 0.782496 2.19749 2.19749C0.779996 3.61248 0 5.49498 0 7.49997C0 9.50246 0.782496 11.3874 2.19749 12.8024C3.61248 14.2199 5.49498 14.9999 7.49997 14.9999C9.17496 14.9999 10.765 14.4549 12.0674 13.4499L18.5599 19.9399C18.579 19.959 18.6016 19.9741 18.6264 19.9844C18.6513 19.9947 18.678 20 18.7049 20C18.7318 20 18.7585 19.9947 18.7834 19.9844C18.8083 19.9741 18.8309 19.959 18.8499 19.9399L19.9399 18.8524C19.959 18.8334 19.9741 18.8108 19.9844 18.7859C19.9947 18.761 20 18.7343 20 18.7074C20 18.6805 19.9947 18.6538 19.9844 18.6289C19.9741 18.6041 19.959 18.5815 19.9399 18.5624ZM11.46 11.46C10.4 12.5174 8.99496 13.0999 7.49997 13.0999C6.00497 13.0999 4.59998 12.5174 3.53998 11.46C2.48249 10.4 1.89999 8.99496 1.89999 7.49997C1.89999 6.00497 2.48249 4.59748 3.53998 3.53998C4.59998 2.48249 6.00497 1.89999 7.49997 1.89999C8.99496 1.89999 10.4025 2.47999 11.46 3.53998C12.5174 4.59998 13.0999 6.00497 13.0999 7.49997C13.0999 8.99496 12.5174 10.4025 11.46 11.46Z"
                                fill="#131522" />
                        </svg>}
                        {!!searchValue && <button className="search-reset" onClick={() => resetSearch()}>
                        </button>}
                        {((searchFocuse || resultHover) && !!searchValue) &&
                            <div
                                className="side-drop-menu search-result"
                            // ngIf="(searchFocuse || resultHover) && !!searchForm.value.data"
                            >
                                {/* <app-top-preloader ngIf="searchPreloader"></app> - top - preloader > */}
                                {(searchTypes.length < 1) &&
                                    <p>
                                        Ничего не найдено
                                    </p>
                                }
                                {(types.type.length > 0) &&
                                    <>
                                        <h4> Инструменты</h4>
                                        {types.type.map((type, i) => {
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
                                {(services.type.length > 0) && <>
                                    <h4>Услуги</h4>
                                    {services.type.map((service, i) => {
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
                    <li className="header__phone">
                        <Link href={`tel: ${contactsSettings.phoneNumber}`}>
                            <img src="assets/img/phone-icon.svg" alt="" />
                            {contactsSettings.phoneNumber}
                        </Link>
                    </li>
                </ul>
                {/* MOBILE SEARCH START */}
                {searchMobile && <div className="header__search">
                    <form
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
                    </form>
                    {!searchValue && <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.9399 18.5624L13.4474 12.0699C14.4549 10.7675 14.9999 9.17496 14.9999 7.49997C14.9999 5.49498 14.2174 3.61498 12.8024 2.19749C11.3874 0.779996 9.50246 0 7.49997 0C5.49748 0 3.61248 0.782496 2.19749 2.19749C0.779996 3.61248 0 5.49498 0 7.49997C0 9.50246 0.782496 11.3874 2.19749 12.8024C3.61248 14.2199 5.49498 14.9999 7.49997 14.9999C9.17496 14.9999 10.765 14.4549 12.0674 13.4499L18.5599 19.9399C18.579 19.959 18.6016 19.9741 18.6264 19.9844C18.6513 19.9947 18.678 20 18.7049 20C18.7318 20 18.7585 19.9947 18.7834 19.9844C18.8083 19.9741 18.8309 19.959 18.8499 19.9399L19.9399 18.8524C19.959 18.8334 19.9741 18.8108 19.9844 18.7859C19.9947 18.761 20 18.7343 20 18.7074C20 18.6805 19.9947 18.6538 19.9844 18.6289C19.9741 18.6041 19.959 18.5815 19.9399 18.5624ZM11.46 11.46C10.4 12.5174 8.99496 13.0999 7.49997 13.0999C6.00497 13.0999 4.59998 12.5174 3.53998 11.46C2.48249 10.4 1.89999 8.99496 1.89999 7.49997C1.89999 6.00497 2.48249 4.59748 3.53998 3.53998C4.59998 2.48249 6.00497 1.89999 7.49997 1.89999C8.99496 1.89999 10.4025 2.47999 11.46 3.53998C12.5174 4.59998 13.0999 6.00497 13.0999 7.49997C13.0999 8.99496 12.5174 10.4025 11.46 11.46Z"
                            fill="#131522" />
                    </svg>}
                    {searchValue && <button className="search-reset" onClick={() => resetSearch()}>
                    </button>}
                </div>}
                {/* MOBILE SEARCH END */}

                {((searchFocuse || resultHover) && !!searchValue && searchMobile) &&
                    <div className="side-drop-menu search-result">
                        {(searchTypes.length < 1) && <p>
                            Ничего не найдено
                        </p>}
                        {(types.type.length > 0) && <>
                            <h4> Инструменты</h4>
                            {types.type.map((type, i) => {
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
                        {(services.type.length > 0) &&
                            <>
                                <h4>Услуги</h4>
                                {services.type.map((service, i) => {
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
                        <label htmlFor="burger" className="header__nav_mobile">
                            <div></div>
                            <div></div>
                            <div></div>
                        </label>
                    </>
                }
            </nav>
            {searchMobile &&
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
                </nav>}

        </header >
    )
}