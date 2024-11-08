'use client'

import { DropLinkProps } from "./DropLink.props";
import cn from 'classnames';
import styles from './DropLink.module.scss';
import Link from "next/link";
import { useEffect, useRef, useState, KeyboardEvent } from "react";


export function DropLink({ href, children, dropData, className, ...props }: DropLinkProps) {
    const wrapperRef = useRef(null);


    return (
        <ul
            ref={wrapperRef}
            className={styles.wrapper}
            {...props}
        >
            <li
                className={styles.main_item}
            >
                <Link
                    href={href}
                    className={cn(styles.link, styles.main_link)}
                    onClick={(e) => {
                        e.currentTarget.blur();
                    }}
                >
                    {children}
                </Link>
                <div
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
                </div>


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
                                onClick={(e) => {
                                    e.currentTarget.blur();
                                }}
                            >
                                {item.text}
                                <svg
                                    className={styles.arrow}
                                    width="13"
                                    height="9"
                                    viewBox="0 0 13 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M11.5 2L6.5 7L1.5 2" stroke="black" strokeWidth="3" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <ul className={styles.sideDropMenu}>
                                {item.dropData.map(item => {
                                    return (
                                        <li
                                            key={`side-drop-item${item.href}`}
                                        >
                                            <Link
                                                href={item.href}
                                                className={cn(styles.link, styles.second_drop_item)}
                                                onClick={(e) => {
                                                    e.currentTarget.blur();
                                                }}
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