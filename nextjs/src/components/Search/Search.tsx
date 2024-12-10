'use client'

import { SearchProps } from "./Search.props"
import cn from 'classnames';
import styles from './Search.module.scss';
import { getAllCategories } from "@/api/getData";
import { FormEvent, useState } from "react";
import { DropData } from "../DropLink/DropLink.props";
import Link from "next/link";

type SearchRes = {
    text: string,
    href: string
}

export function Search({ placeholder = '', className, dropData, ...props }: SearchProps) {
    const [searchRes, setSearchRes] = useState<SearchRes[]>();

    function searchTool(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        if (value.length < 3) {
            setSearchRes([]);
            return;
        }

        const data: SearchRes[] = [];
        dropData?.forEach(cat => {
            data.push({
                text: cat.text,
                href: cat.href
            });
            cat.dropData.forEach(tool => {
                data.push({
                    text: tool.text,
                    href: tool.href
                })
            })
        })
        const results = data.filter(item => item.text.toLowerCase().includes(value.toLowerCase()));
        console.log(results);
        setSearchRes(results);

    }

    return (
        <ul className={styles.search}>
            <input
                id="search"
                type="search"
                onInput={(e: FormEvent<HTMLInputElement>) => searchTool(e)}
                placeholder={placeholder}
            />
            {!!searchRes?.length && <ul className={styles.results}>
                {searchRes?.map(res => {
                    return (
                        <li
                            key={`searchResult${res.href}`}
                            className={styles.result}
                        >
                            <Link
                                href={res.href}
                            >
                                {res.text}
                            </Link>
                        </li>
                    )
                })}
            </ul>}
        </ul>
    )
}