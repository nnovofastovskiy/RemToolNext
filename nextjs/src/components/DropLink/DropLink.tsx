'use client'

import { DropData, DropLinkProps } from "./DropLink.props";
import cn from 'classnames';
import styles from './DropLink.module.scss';
import Link from "next/link";
import { useEffect, useRef, useState, KeyboardEvent } from "react";


export function DropLink({ href, children, dropData, className, ...props }: DropLinkProps) {
    const wrapperRef = useRef(null);
    const [dropOpen, setDropOpen] = useState(false);
    const [sideOpenItem, setSideOpenItem] = useState<DropData | null>(null);

    return (
        <ul
            ref={wrapperRef}
            className={styles.wrapper}
            {...props}
            // onFocus={mouseOver}
            // onBlur={mouseLeave}
            onMouseOver={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
        >
            <li
                className={styles.main_item}
            >
                <Link
                    href={href}
                    className={cn(styles.link, styles.main_link)}
                    onClick={() => setDropOpen(false)}
                >
                    {children}
                </Link>
                <button
                    className={styles.arrow}
                    onClick={() => setDropOpen(!dropOpen)}
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
                </button>
            </li>
            {dropOpen && <ul className={styles.dropMenu}>
                {dropData?.map(item => {
                    return (
                        <li
                            onMouseOver={() => setSideOpenItem(item)}
                            onMouseLeave={() => setSideOpenItem(null)}
                            key={`drop-item-${item.href}`}
                            className={cn(styles.dropItem)}
                        >
                            <Link
                                href={item.href}
                                className={cn(styles.link, styles.first_drop_item)}
                                onClick={() => setDropOpen(false)}
                            >
                                {item.text}
                            </Link>
                            <button
                                onClick={() => sideOpenItem === item ? setSideOpenItem(null) : setSideOpenItem(item)}
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
                            </button>
                            {sideOpenItem &&
                                <ul className={styles.sideDropMenu}>
                                    {item.dropData.map(item => {
                                        return (
                                            <li
                                                key={`side-drop-item${item.href}`}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className={cn(styles.link, styles.second_drop_item)}
                                                    onClick={() => setDropOpen(false)}
                                                >
                                                    {item.text}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        </li>
                    )
                })}
            </ul>
            }
        </ul>
    )
}