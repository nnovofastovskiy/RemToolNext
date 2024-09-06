'use client'

import { DropLinkProps } from "./DropLink.props";
import cn from 'classnames';
import styles from './DropLink.module.scss';
import Link from "next/link";
import { useEffect, useRef, useState, KeyboardEvent } from "react";


export function DropLink({ href, children, dropData, className, ...props }: DropLinkProps) {
    const [dropFlag, setDropFlag] = useState(false);
    const dropRef = useRef<HTMLUListElement>(null);

    // useEffect(() => {
    //     if (dropFlag)
    //         dropRef.current?.tabIndex(1);
    // }, [dropFlag]);

    const hoverHandle = () => {
        setDropFlag(true);
    }
    const unhoverHandle = () => {
        setDropFlag(false);
    }
    const keyHandle = (e: KeyboardEvent<HTMLAnchorElement>) => {
        console.log(e.key);

        if (e.key === "Tab") {
            if (dropRef.current) {
                dropRef.current.querySelector('a')?.focus();
            }
            // dropRef.current?.firstChild?.focus();
        }
    }

    return (
        <ul className={styles.wrapper}>
            <li
                className={cn(styles.link, styles.first)}
            >
                <Link
                    href={href}
                    // onMouseEnter={hoverHandle}
                    // onMouseLeave={unhoverHandle}
                    // onFocus={hoverHandle}
                    // onBlur={unhoverHandle}
                    {...props}
                >
                    {children}
                </Link>
                {!!dropData &&
                    <button
                        className={styles.arrow_btn}
                        onClick={() => setDropFlag(!dropFlag)}
                    // onKeyDown={(e: KeyboardEvent<HTMLAnchorElement>) => keyHandle(e)}
                    >
                        <svg
                            className={cn({ [styles.arrow_flip]: dropFlag })}
                            width="13"
                            height="9"
                            viewBox="0 0 13 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M11.5 2L6.5 7L1.5 2" stroke="black" strokeWidth="3" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                    </button >
                }
            </li>
            {
                !!dropData &&
                <ul className={styles.dropMenu}>
                    {dropData.map(item => {
                        return (
                            <li
                                key={`drop-item-${item.href}`}
                                className={cn(styles.link, styles.dropItem)}
                            >
                                <Link
                                    href={item.href}
                                // tabIndex={1}
                                // onFocus={hoverHandle}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            }
        </ul>
    )
}