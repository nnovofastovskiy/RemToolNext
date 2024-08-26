'use client'

import { NavLinkProps } from "./NavLink.props"
import cn from 'classnames';
import styles from './NavLink.module.scss';
import Link from "next/link";
import { useEffect, useRef, useState, KeyboardEvent } from "react";


export function NavLink({ href, children, dropData, className, ...props }: NavLinkProps) {
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
    // const keyHandle = (e: KeyboardEvent<HTMLAnchorElement>) => {
    //     console.log(e.key);

    //     if (e.key === "Tab") {
    //         dropRef.current?.firstChild.focus();
    //     }
    // }

    return (
        <>
            <Link
                href={href}
                className={styles.link}
                onMouseEnter={hoverHandle}
                onMouseLeave={unhoverHandle}
                // onFocus={hoverHandle}
                onBlur={unhoverHandle}
                // onKeyDown={(e: KeyboardEvent<HTMLAnchorElement>) => keyHandle(e)}
                {...props}
            >
                {children}
            </Link>
            {!!dropData &&
                <button
                    className={styles.arrow_btn}
                    onClick={() => setDropFlag(!dropFlag)}
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
            {
                (!!dropData && dropFlag) &&
                <ul
                    className={styles.dropMenu}
                    ref={dropRef}
                >
                    {dropData.map(item => {
                        return (
                            <Link
                                key={`drop-item-${item.href}`}
                                href={item.href}
                                tabIndex={0}
                                onFocus={hoverHandle}
                            >
                                {item.text}
                            </Link>
                        )
                    })}
                </ul>
            }
        </>
    )
}