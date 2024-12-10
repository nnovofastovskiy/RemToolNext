'use client'

import { DropData, DropLinkProps } from "./DropLink.props";
import cn from 'classnames';
import styles from './DropLink.module.scss';
import Link from "next/link";
import { useEffect, useRef, useState, KeyboardEvent, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";


export function DropLink({ href, children, dropData, className, ...props }: DropLinkProps) {
    const sideDropRef = useRef<HTMLUListElement>(null);
    const wrapperRef = useRef<HTMLUListElement>(null);
    const mainDropInputRef = useRef<HTMLInputElement>(null);

    const sideDropClickHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sideDropChecks = sideDropRef.current?.querySelectorAll<HTMLInputElement>('input[type=checkbox]');
        sideDropChecks?.forEach(checkbox => {
            if (checkbox != e.target) {
                checkbox.checked = false;
            }
        });
    }

    return (
        <ul
            className={styles.wrapper}
            ref={wrapperRef}
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
                    ref={mainDropInputRef}
                    className={styles.mainDropInput}
                    type="checkbox"
                    name="main-drop"
                    id="main-drop"
                    aria-label={`Раскрыть меню ${children}`}
                    style={{
                        position: 'absolute',
                        clip: 'rect(0 0 0 0)',
                        clipPath: 'inset(50%)',
                        height: '1px',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        width: '1px'
                    }}
                />
                <label
                    htmlFor="main-drop"
                    className={styles.arrow}
                    role="checkbox"
                    style={{ userSelect: 'none', position: 'relative' }}
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
            <ul className={styles.dropMenu} ref={sideDropRef}>
                {dropData?.map(item => {
                    return (
                        <li
                            key={`drop-item-${item.href}`}
                            className={cn(styles.dropItem)}
                        >
                            <Link
                                href={item.href}
                                className={cn(styles.link, styles.first_drop_item)}
                                onClick={() => {
                                    if (mainDropInputRef.current) {
                                        mainDropInputRef.current.checked = false;
                                    }
                                }}
                            >
                                {item.text}
                            </Link>
                            <input
                                type="checkbox"
                                name="sideDropInput"
                                id={`sideDropInput-${item.href}`}
                                className={styles.sideDropInput}
                                onChange={(e) => sideDropClickHandle(e)}
                                aria-label={`Раскрыть меню ${item.text}`}
                                style={{
                                    position: 'absolute',
                                    clip: 'rect(0 0 0 0)',
                                    clipPath: 'inset(50%)',
                                    height: '1px',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    width: '1px'
                                }}
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
                                                onClick={() => {
                                                    if (mainDropInputRef.current) {
                                                        mainDropInputRef.current.checked = false;
                                                    }
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