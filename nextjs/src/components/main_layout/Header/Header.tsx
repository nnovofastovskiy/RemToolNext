import Link from 'next/link';
import styles from './Header.module.css';
import cn from 'classnames';
import { useState } from 'react';

export const Header = () => {
    const [dropMenuFlag, setDropMenuFlag] = useState(false);
    const [sideElectro, setSideElectro] = useState(false);


    const dropMenuHide = () => {

    }

    const arrowDown = (type: string) => {

    }

    const arrowRight = (type: string) => {

    }

    return (
        <header className="header">
            <div className="header__topper">
                <span className="header__hours">График работы: пн-пт 10:00-20:00</span>
                <Link className="header__adress" target="_blank" href="https://yandex.ru/maps/-/CCUEb2QElD">Наш адрес: г.Москва, МГСА
                    №256</Link>
                <Link className="header__mob-phone" href="tel: {{contactsSettings$.phoneNumber}}">
                    {/ {{ contactsSettings$.phoneNumber }} /}
                </Link>
                {/ <app-send-request></app - send - request > /}
            </div>
            <nav className="header__nav nav">
                <Link className="header__logo" href="['/']" routerLinkActive='active'>
                    <img src="assets/img/header__logo.svg" alt="logo" />
                </Link>
                <ul>
                    <li className="{'nav__item': true, 'nav__item_hover': dropMenuFlag}" routerLinkActive='active'
                        onMouseEnter={() => arrowDown('h')} onMouseLeave={() => setDropMenuFlag(false)}>
                        <Link className="nav__link drop" href="['tools']" onClick={() => dropMenuHide()}>
                            Инструменты
                        </Link>
                        <div className="arrow-down" onClick={() => arrowDown('t')}>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 2L6.5 7L1.5 2" stroke="black" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        {dropMenuFlag && <>
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
                                            href="['tools', 'electro']"
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
                                                        href="['tools', 'electro', this.tools.electro.includedIds[i]]"
                                                        onClick={() => dropMenuHide()}
                                                    >
                                                        {tool}
                                                    </Link>
                                                )
                                            })}
                                        </div>}
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideFuel}"
                                        onMouseEnter="arrowRight('benzom')" onMouseLeave="sideFuel = false"
                                        onClick="arrowRight('benzo')">
                                        <Link className="drop-menu__link" href="['tools', 'benzo']" onClick="dropMenuHide()">
                                            Бензоинструмент
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <div className="side-drop-menu" ngIf="sideFuel">
                                            <Link ngFor="let tool of this.tools.benzo.includedTypes; index as i"
                                                href="['tools', 'benzo', this.tools.benzo.includedIds[i]]"
                                                onClick="dropMenuHide()">
                                                {tool}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideGarden}"
                                        onMouseEnter="arrowRight('gardenm')" onMouseLeave="sideGarden = false"
                                        onClick="arrowRight('garden')">
                                        <Link className="drop-menu__link" href="['tools', 'garden']" onClick="dropMenuHide()">
                                            Садовая техника
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <div className="side-drop-menu" ngIf="sideGarden">
                                            <Link ngFor="let tool of this.tools.garden.includedTypes; index as i"
                                                href="['tools', 'garden', this.tools.garden.includedIds[i]]"
                                                onClick="dropMenuHide()">
                                                {tool}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideCompressors}"
                                        onMouseEnter="arrowRight('compressorm')" onMouseLeave="sideCompressors = false"
                                        onClick="arrowRight('compressor')">
                                        <Link className="drop-menu__link" href="['tools', 'compressor']" onClick="dropMenuHide()">
                                            Компрессоры
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <div className="side-drop-menu" ngIf="sideCompressors">
                                            <Link ngFor="let tool of this.tools.compressors.includedTypes; index as i"
                                                href="['tools', 'compressors', this.tools.compressors.includedIds[i]]"
                                                onClick="dropMenuHide()">
                                                {tool}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideGenerators}"
                                        onMouseEnter="arrowRight('generatorm')" onMouseLeave="sideGenerators = false"
                                        onClick="arrowRight('generator')">
                                        <Link className="drop-menu__link" href="['tools', 'generator']" onClick="dropMenuHide()">
                                            Генераторы
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <div className="side-drop-menu" ngIf="sideGenerators">
                                            <Link ngFor="let tool of this.tools.generators.includedTypes; index as i"
                                                href="['tools', 'generators', this.tools.generators.includedIds[i]]"
                                                onClick="dropMenuHide()">
                                                {tool}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideWelding}"
                                        onMouseEnter="arrowRight('weldingm')" onMouseLeave="sideWelding = false"
                                        onClick="arrowRight('welding')">
                                        <Link className="drop-menu__link" href="['tools', 'welding']" onClick="dropMenuHide()">
                                            Сварочная техника
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <div className="side-drop-menu" ngIf="sideWelding">
                                            <Link ngFor="let tool of this.tools.welding.includedTypes; index as i"
                                                href="['tools', 'welding', this.tools.welding.includedIds[i]]"
                                                onClick="dropMenuHide()">
                                                {tool}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideHeatguns}"
                                        onMouseEnter="arrowRight('heatgunm')" onMouseLeave="sideHeatguns = false"
                                        onClick="arrowRight('heatgun')">
                                        <Link className="drop-menu__link" href="['tools', 'heatgun']" onClick="dropMenuHide()">
                                            Тепловые пушки
                                        </Link>
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <div className="side-drop-menu" ngIf="sideHeatguns">
                                            < /> !-- <div className="side-drop-menu"> -->
                                                <Link ngFor="let tool of this.tools.heatguns.includedTypes; index as i"
                                                    href="['tools', 'heatguns', this.tools.heatguns.includedIds[i]]"
                                                    onClick="dropMenuHide()">
                                                    {tool}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="{'drop-menu__item': true, 'drop-menu__item_hover': sideRest}"
                                            onMouseEnter="arrowRight('restm')" onMouseLeave="sideRest = false"
                                            onClick="arrowRight('rest')">
                                            <Link className="drop-menu__link" href="['tools', 'rest']" onClick="dropMenuHide()">
                                                Техника для отдыха
                                            </Link>
                                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L2 12" stroke="black" stroke-width="3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <div className="side-drop-menu" ngIf="sideRest">
                                                <Link ngFor="let tool of this.tools.rest.includedTypes; index as i"
                                                    href="['tools', 'rest', this.tools.rest.includedIds[i]]"
                                                    onClick="dropMenuHide()">
                                                    {tool}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </li><li className="nav__item" routerLinkActive='active'>
                                <Link className="nav__link" href="['delivery']">Доставка и оплата</Link>
                            </li><li className="nav__item" routerLinkActive='active'>
                                <Link className="nav__link" href="['contacts']">Контакты</Link>
                            </li><li className="header__search" ngIf="!searchMobile">
                                <form formGroup="searchForm" onInput="searchTool()">
                                    <input formControlName="data" ngModel="this.searchForm.value.data" id="search" type="search"
                                        placeholder={{ searchPlaceholder }} onFocus="searchFocuse = true" onBlur="searchFocuse = false">
                                    </></form>
                                <svg ngIf="!searchForm.value.data" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.9399 18.5624L13.4474 12.0699C14.4549 10.7675 14.9999 9.17496 14.9999 7.49997C14.9999 5.49498 14.2174 3.61498 12.8024 2.19749C11.3874 0.779996 9.50246 0 7.49997 0C5.49748 0 3.61248 0.782496 2.19749 2.19749C0.779996 3.61248 0 5.49498 0 7.49997C0 9.50246 0.782496 11.3874 2.19749 12.8024C3.61248 14.2199 5.49498 14.9999 7.49997 14.9999C9.17496 14.9999 10.765 14.4549 12.0674 13.4499L18.5599 19.9399C18.579 19.959 18.6016 19.9741 18.6264 19.9844C18.6513 19.9947 18.678 20 18.7049 20C18.7318 20 18.7585 19.9947 18.7834 19.9844C18.8083 19.9741 18.8309 19.959 18.8499 19.9399L19.9399 18.8524C19.959 18.8334 19.9741 18.8108 19.9844 18.7859C19.9947 18.761 20 18.7343 20 18.7074C20 18.6805 19.9947 18.6538 19.9844 18.6289C19.9741 18.6041 19.959 18.5815 19.9399 18.5624ZM11.46 11.46C10.4 12.5174 8.99496 13.0999 7.49997 13.0999C6.00497 13.0999 4.59998 12.5174 3.53998 11.46C2.48249 10.4 1.89999 8.99496 1.89999 7.49997C1.89999 6.00497 2.48249 4.59748 3.53998 3.53998C4.59998 2.48249 6.00497 1.89999 7.49997 1.89999C8.99496 1.89999 10.4025 2.47999 11.46 3.53998C12.5174 4.59998 13.0999 6.00497 13.0999 7.49997C13.0999 8.99496 12.5174 10.4025 11.46 11.46Z"
                                        fill="#131522" />
                                </svg>
                                <button ngIf="!!searchForm.value.data" className="search-reset" onClick="resetSearch()">
                                </button>
                                <div className="side-drop-menu search-result"
                                    ngIf="(searchFocuse || resultHover) && !!searchForm.value.data">
                                    <app-top-preloader ngIf="searchPreloader"></app> - top - preloader >
                                    <p ngIf="searchTypes$.length < 1">
                                        Ничего не найдено
                                    </p>
                                    <h4 ngIf="types.type.length > 0"> Инструменты</h4>
                                    <div ngFor="let type of types.type; index as i">
                                        <Link href="['tools', types.category[i], types.id[i]]" onClick="resultHover = false"
                                            onMouseover="resultHover = true" onMouseout="resultHover = false">
                                            {type}
                                        </Link>
                                    </div>
                                    <h4 ngIf="services.type.length > 0"> Услуги</h4>
                                    <div ngFor="let service of services.type; index as i">
                                        <Link href="['tools', services.category[i], services.id[i]]" onClick="resultHover = false"
                                            onMouseover="resultHover = true" onMouseout="resultHover = false">
                                            {service}
                                        </Link>
                                    </div>
                                </div>
                            </li><li className="header__phone">
                                <Link href="tel: {{contactsSettings$.phoneNumber}}">
                                    <img src="assets/img/phone-icon.svg" alt="">
                                        {contactsSettings$.phoneNumber}
                                    </></Link>
                            </li></>
        </ul >
                <div className="header__search" ngIf="searchMobile" >
                    <form formGroup="searchForm" onInput="searchTool()" >
                        <input formControlName="data" ngModel="this.searchForm.value.data" id="search" type="search"
                            placeholder={searchPlaceholder} onFocus="searchFocuse = true; burger = false"
                            onBlur="searchFocuse = false" >
                    </form >
                    <svg ngIf="!searchForm.value.data" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg" >
                        <path
                            d="M19.9399 18.5624L13.4474 12.0699C14.4549 10.7675 14.9999 9.17496 14.9999 7.49997C14.9999 5.49498 14.2174 3.61498 12.8024 2.19749C11.3874 0.779996 9.50246 0 7.49997 0C5.49748 0 3.61248 0.782496 2.19749 2.19749C0.779996 3.61248 0 5.49498 0 7.49997C0 9.50246 0.782496 11.3874 2.19749 12.8024C3.61248 14.2199 5.49498 14.9999 7.49997 14.9999C9.17496 14.9999 10.765 14.4549 12.0674 13.4499L18.5599 19.9399C18.579 19.959 18.6016 19.9741 18.6264 19.9844C18.6513 19.9947 18.678 20 18.7049 20C18.7318 20 18.7585 19.9947 18.7834 19.9844C18.8083 19.9741 18.8309 19.959 18.8499 19.9399L19.9399 18.8524C19.959 18.8334 19.9741 18.8108 19.9844 18.7859C19.9947 18.761 20 18.7343 20 18.7074C20 18.6805 19.9947 18.6538 19.9844 18.6289C19.9741 18.6041 19.959 18.5815 19.9399 18.5624ZM11.46 11.46C10.4 12.5174 8.99496 13.0999 7.49997 13.0999C6.00497 13.0999 4.59998 12.5174 3.53998 11.46C2.48249 10.4 1.89999 8.99496 1.89999 7.49997C1.89999 6.00497 2.48249 4.59748 3.53998 3.53998C4.59998 2.48249 6.00497 1.89999 7.49997 1.89999C8.99496 1.89999 10.4025 2.47999 11.46 3.53998C12.5174 4.59998 13.0999 6.00497 13.0999 7.49997C13.0999 8.99496 12.5174 10.4025 11.46 11.46Z"
                            fill="#131522" />
                    </svg >
                    <button ngIf="!!searchForm.value.data" className="search-reset" onClick="resetSearch()" >
                    </button >
                </div >
                <div className="side-drop-menu search-result"
                    ngIf="(searchFocuse || resultHover) && !!searchForm.value.data && searchMobile" >
                    {/* <app-top-preloader ngIf="searchPreloader" ></app - top - preloader > */}
                    <p ngIf="searchTypes$.length < 1" >
                        Ничего не найдено
                    </p >
                    <h4 ngIf="types.type.length > 0" > Инструменты</h4 >
                    <div ngFor="let type of types.type; index as i" >
                        <Link href="['tools', types.category[i], types.id[i]]" onClick="resultHover = false"
                            onMouseover="resultHover = true" onMouseout="resultHover = false" >
                            {type}
                        </Link >
                    </div >
                    <h4 ngIf="services.type.length > 0" > Услуги</h4 >
                    <div ngFor="let service of services.type; index as i" >
                        <Link href="['tools', services.category[i], services.id[i]]" onClick="resultHover = false"
                            onMouseover="resultHover = true" onMouseout="resultHover = false" >
                            {service}
                        </Link >
                    </div >
                </div >
                <input id="burger" type="checkbox" ngModel="burger" ngIf="searchMobile" >
                    <label for="burger" className="header__nav_mobile" ngIf="searchMobile" >
                        <div></div>
                        <div></div>
                        <div></div>
                    </label >
            </nav >
            <nav className="mobile__nav" className="{'mobile__nav_visible': burger}" ngIf="searchMobile" >
                <Link href="['tools', 'electro']" onClick="burger = false" > Электроинструмент</Link >
                <Link href="['tools', 'benzo']" onClick="burger = false" > Бензоинструмент</Link >
                <Link href="['tools', 'welding']" onClick="burger = false" > Сварочные аппараты</Link >
                <Link href="['tools', 'generator']" onClick="burger = false" > Генераторы</Link >
                <Link href="['tools', 'compressor']" onClick="burger = false" > Компрессоры</Link >
                <Link href="['tools', 'rest']" onClick="burger = false" > Техника для отдыха</Link >
                <Link href="['tools', 'garden']" onClick="burger = false" > Садовая техника</Link >
                <Link href="['tools', 'heatgun']" onClick="burger = false" > Тепловые пушки</Link >
                <Link href="['delivery']" onClick="burger = false" > Доставка и оплата</Link >
                <Link href="['contacts']" onClick="burger = false" > Контакты</Link >
            </nav >

        </header >
    )
}