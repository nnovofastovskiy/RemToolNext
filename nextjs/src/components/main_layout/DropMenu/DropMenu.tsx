'use client'

import { useState } from 'react';
import styles from './DropMenu.module.scss';
import Link from 'next/link';
import cn from 'classnames';

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

export const DropMenu = () => {

    const [sideElectro, setSideElectro] = useState(false);
    const [sideFuel, setSideFuel] = useState(false);
    const [sideGarden, setSideGarden] = useState(false);
    const [sideCompressors, setSideCompressors] = useState(false);
    const [sideGenerators, setSideGenerators] = useState(false);
    const [sideWelding, setSideWelding] = useState(false);
    const [sideHeatguns, setSideHeatguns] = useState(false);
    const [sideRest, setSideRest] = useState(false);

    const dropMenuHide = () => {

    }

    const arrowRight = (type: string) => {

    }

    return (
        <div className={styles["drop-menu"]}>
            <div>
                <div
                    className={cn(styles['drop-menu__item'], { [styles['drop-menu__item_hover']]: sideElectro })}
                    onMouseEnter={() => arrowRight('electrom')}
                    onMouseLeave={() => setSideElectro(false)}
                    onClick={() => arrowRight('electro')}
                >
                    <Link
                        className={styles["drop-menu__link"]}
                        href="tools/electro"
                        onClick={() => dropMenuHide()}
                    >
                        Электроинструмент
                    </Link>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L7 7L2 12" stroke="black" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    {sideElectro && <div className={styles["side-drop-menu"]}>
                        {tools.electro.map((tool, i) => {
                            return (
                                <Link
                                    key={`electro-${i}`}
                                    href={`tools/electro/id`}
                                    // href="['tools', 'electro', this.tools.electro.includedIds[i]]"
                                    onClick={() => dropMenuHide()}
                                >
                                    {tool}
                                </Link>
                            );
                        })}
                    </div>}
                </div>
                <div
                    className={cn(styles['drop-menu__item'], { [styles['drop-menu__item_hover']]: sideFuel })}
                    onMouseEnter={() => arrowRight('benzom')} onMouseLeave={() => setSideFuel(false)}
                    onClick={() => arrowRight('benzo')}>
                    <Link
                        className={styles["drop-menu__link"]}
                        href="tools/benzo"
                        onClick={() => dropMenuHide()}
                    >
                        Бензоинструмент
                    </Link>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L7 7L2 12" stroke="black" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    {sideFuel && <div className={styles["side-drop-menu"]}>
                        {tools.benzo.map((tool, i) => {
                            return (
                                <Link
                                    key={`benzo-${i}`}
                                    href={`tools/benzo/id`}
                                    // href="['tools', 'benzo', this.tools.benzo.includedIds[i]]"
                                    onClick={() => dropMenuHide()}
                                >
                                    {tool}
                                </Link>
                            );
                        })}
                    </div>}
                </div>
                <div
                    className={cn(styles['drop-menu__item'], { [styles['drop-menu__item_hover']]: sideGarden })}
                    onMouseEnter={() => arrowRight('gardenm')} onMouseLeave={() => setSideGarden(false)}
                    onClick={() => arrowRight('garden')}>
                    <Link
                        className={styles["drop-menu__link"]}
                        href={`tools/garden`}
                        // href="['tools', 'garden']"
                        onClick={() => dropMenuHide()}
                    >
                        Садовая техника
                    </Link>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L7 7L2 12" stroke="black" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    {sideGarden && <div className={styles["side-drop-menu"]}>
                        {tools.garden.map((tool, i) => {
                            return (
                                <Link
                                    key={`garden-${i}`}
                                    href={`tools/garden/id`}
                                    // href="['tools', 'garden', this.tools.garden.includedIds[i]]"
                                    onClick={() => dropMenuHide()}
                                >
                                    {tool}
                                </Link>
                            );
                        })}
                    </div>}
                </div>
                <div
                    className={cn(styles['drop-menu__item'], { [styles['drop-menu__item_hover']]: sideCompressors })}
                    onMouseEnter={() => arrowRight('compressorm')} onMouseLeave={() => setSideCompressors(false)}
                    onClick={() => arrowRight('compressor')}>
                    <Link
                        className={styles["drop-menu__link"]}
                        href={`tools/compressors`}
                        // href="['tools', 'compressor']"
                        onClick={() => dropMenuHide()}
                    >
                        Компрессоры
                    </Link>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L7 7L2 12" stroke="black" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    {sideCompressors && <div className={styles["side-drop-menu"]}>
                        {tools.compressors.map((tool, i) => {
                            return (
                                <Link
                                    key={`compressors-${i}`}
                                    href={`tools/compressors/id`}
                                    // href="['tools', 'compressors', this.tools.compressors.includedIds[i]]"
                                    onClick={() => dropMenuHide()}
                                >
                                    {tool}
                                </Link>
                            );
                        })}
                    </div>}
                </div>
                <div
                    className={cn(styles['drop-menu__item'], { [styles['drop-menu__item_hover']]: sideGenerators })}
                    onMouseEnter={() => arrowRight('generatorm')} onMouseLeave={() => setSideGenerators(false)}
                    onClick={() => arrowRight('generator')}>
                    <Link
                        className={styles["drop-menu__link"]}
                        href={`tools/generators`}
                        // href="['tools', 'generator']"
                        onClick={() => dropMenuHide()}
                    >
                        Генераторы
                    </Link>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L7 7L2 12" stroke="black" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    {sideGenerators && <div className={styles["side-drop-menu"]}>
                        {tools.generators.map((tool, i) => {
                            return (
                                <Link
                                    key={`generators-${i}`}
                                    href={`tools/generators/id`}
                                    // href="['tools', 'generators', this.tools.generators.includedIds[i]]"
                                    onClick={() => dropMenuHide()}
                                >
                                    {tool}
                                </Link>
                            );
                        })}
                    </div>}
                </div>
                <div
                    className={cn(styles['drop-menu__item'], { [styles['drop-menu__item_hover']]: sideWelding })}
                    onMouseEnter={() => arrowRight('weldingm')} onMouseLeave={() => setSideWelding(false)}
                    onClick={() => arrowRight('welding')}>
                    <Link
                        className={styles["drop-menu__link"]}
                        href={`tools/welding`}
                        // href="['tools', 'welding']"
                        onClick={() => dropMenuHide()}
                    >
                        Сварочная техника
                    </Link>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L7 7L2 12" stroke="black" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    {sideWelding && <div className={styles["side-drop-menu"]}>
                        {tools.welding.map((tool, i) => {
                            return (
                                <Link
                                    key={`welding-${i}`}
                                    href={`tools/welding/id`}
                                    // href="['tools', 'welding', this.tools.welding.includedIds[i]]"
                                    onClick={() => dropMenuHide()}
                                >
                                    {tool}
                                </Link>
                            );
                        })}
                    </div>}
                </div>
                <div
                    className={cn(styles['drop-menu__item'], { [styles['drop-menu__item_hover']]: sideHeatguns })}
                    onMouseEnter={() => arrowRight('heatgunm')} onMouseLeave={() => setSideHeatguns(false)}
                    onClick={() => arrowRight('heatgun')}>
                    <Link
                        className={styles["drop-menu__link"]}
                        href={`tools/heatgun`}
                        // href="['tools', 'heatgun']"
                        onClick={() => dropMenuHide()}
                    >
                        Тепловые пушки
                    </Link>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L7 7L2 12" stroke="black" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    {sideHeatguns && <div className={styles["side-drop-menu"]}>
                        {tools.heatguns.map((tool, i) => {
                            return (
                                <Link
                                    key={`heatguns-${i}`}
                                    href={`tools/heatgun/id`}
                                    // href="['tools', 'heatguns', this.tools.heatguns.includedIds[i]]"
                                    onClick={() => dropMenuHide()}
                                >
                                    {tool}
                                </Link>
                            );
                        })}
                    </div>}
                </div>
                <div
                    className={cn(styles['drop-menu__item'], { [styles['drop-menu__item_hover']]: sideRest })}
                    onMouseEnter={() => arrowRight('restm')} onMouseLeave={() => setSideRest(false)}
                    onClick={() => arrowRight('rest')}>
                    <Link
                        className={styles["drop-menu__link"]}
                        href={`tools/rest`}
                        // href="['tools', 'rest']"
                        onClick={() => dropMenuHide()}
                    >
                        Техника для отдыха
                    </Link>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L7 7L2 12" stroke="black" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    {sideRest && <div className={styles["side-drop-menu"]}>
                        {tools.rest.map((tool, i) => {
                            return (
                                <Link
                                    key={`rest-${i}`}
                                    href={`tools/rest/id`}
                                    // href="['tools', 'rest', this.tools.rest.includedIds[i]]"
                                    onClick={() => dropMenuHide()}
                                >
                                    {tool}
                                </Link>
                            );
                        })}
                    </div>}
                </div>
            </div>
        </div>
    )
}
