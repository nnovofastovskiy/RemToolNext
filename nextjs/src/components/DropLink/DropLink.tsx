'use client'

import { DropData, DropLinkProps } from "./DropLink.props";
import cn from 'classnames';
import styles from './DropLink.module.scss';
import Link from "next/link";
import { useEffect, useRef, useState, KeyboardEvent, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";


export function DropLink({ href, children, dropData, className, ...props }: DropLinkProps) {
    // const wrapperRef = useRef(null);
    // const [dropOpen, setDropOpen] = useState(false);
    // const [sideOpenItem, setSideOpenItem] = useState<DropData | null>(null);

    return (
        <ul
            className={styles.wrapper}
            {...props}

        >
            <li
                className={styles.main_item}
            >
                <Link
                    href={href}
                    className={cn(styles.link, styles.main_link)}
                >
                    {children}
                </Link>
                <input
                    className={styles.mainDropInput}
                    type="checkbox"
                    name="main-drop"
                    id="main-drop"
                    aria-label="Раскрыть меню"
                />
                <label
                    htmlFor="main-drop"
                    className={styles.arrow}
                >
                    <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M11.5 2L6.5 7L1.5 2" stroke="black" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </label>
            </li>
            <ul className={styles.dropMenu}>
                {dropData?.map(item => {
                    return (
                        <li
                            key={`drop-item-${item.href}`}
                            className={cn(styles.dropItem)}
                        >
                            <Link
                                href={item.href}
                                className={cn(styles.link, styles.first_drop_item)}
                            >
                                {item.text}
                            </Link>
                            <input
                                type="radio"
                                name="sideDropInput"
                                id={`sideDropInput-${item.href}`}
                                className={styles.sideDropInput}
                            // onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                            //     e.preventDefault();
                            //     console.log(e.target.checked);
                            //     if (e.target.checked) {
                            //         e.target.checked = false;
                            //     } else {
                            //         e.target.checked = true;
                            //     }
                            // }}
                            />
                            <label
                                htmlFor={`sideDropInput-${item.href}`}
                                className={styles.arrow}
                            >
                                <svg
                                    width="13"
                                    height="9"
                                    viewBox="0 0 13 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M11.5 2L6.5 7L1.5 2" stroke="black" strokeWidth="3" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </label>
                            <ul className={styles.sideDropMenu}>
                                {item.dropData.map(item => {
                                    return (
                                        <li
                                            key={`side-drop-item${item.href}`}
                                        >
                                            <Link
                                                href={item.href}
                                                className={cn(styles.link, styles.second_drop_item)}
                                            >
                                                {item.text}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>

                        </li>
                    )
                })}
            </ul>

        </ul>
    )
}