import { HTMLAttributes, ReactNode } from "react";
import { Url } from "url";

export interface DropData {
    text: string,
    href: string,
    dropData?: {
        text: string,
        href: string
    }[],
}

export interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    href: string,
    children?: ReactNode,
    dropData?: DropData[]
}