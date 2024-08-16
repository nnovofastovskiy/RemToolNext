import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type: 'primary' | 'ghost',
    text?: string,
    children?: ReactNode
}