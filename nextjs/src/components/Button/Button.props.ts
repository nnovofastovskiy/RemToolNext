import { HTMLAttributes, ReactElement } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type: 'primary' | 'ghost',
    text?: string,
    children?: ReactElement | string
}