'use client'

import { NavLinkProps } from "./NavLink.props"
import cn from 'classnames';
import styles from './NavLink.module.scss';
import Link from "next/link";
import { useState } from "react";


export function NavLink({ href, children, dropData, className, ...props }: NavLinkProps) {
    const [dropFlag, setDropFlag] = useState(false);

    const hoverHandle = () => {
        setDropFlag(true);
    }
    const unhoverHandle = () => {
        setDropFlag(false);
    }

    return (
        <Link
            href={href}
            className={styles.link}
            onMouseEnter={hoverHandle}
            onMouseLeave={unhoverHandle}
            {...props}
        >
            {children}
            {!!dropData &&
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 2L6.5 7L1.5 2" stroke="black" strokeWidth="3" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            }
            {(!!dropData && dropFlag) &&
                <pre>
                    {JSON.stringify(dropData, null, 2)}
                </pre>
            }
        </Link>
    )
}