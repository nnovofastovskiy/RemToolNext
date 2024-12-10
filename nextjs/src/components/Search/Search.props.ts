import { HTMLAttributes, ReactElement } from "react";
import { DropData } from "../DropLink/DropLink.props";

export interface SearchProps extends HTMLAttributes<HTMLInputElement> {
    placeholder?: string,
    dropData?: DropData[]
}