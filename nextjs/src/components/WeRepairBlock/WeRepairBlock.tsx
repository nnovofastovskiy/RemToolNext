import styles from "./WeRepairBlock.module.scss";
import { WeRepairBlockProps } from "./WeRepairBlock.props";
import Link from "next/link";
import { getAllCategories } from "@/api/getData";
import Image from "next/image";
import cn from "classnames";

export async function WeRepairBlock({ className }: WeRepairBlockProps) {
    const categories = await getAllCategories();
    // console.log(categories);

    return (
        <div
            className={cn(styles.wrapper, className)}
        >
            {/* <pre>
                {JSON.stringify(categories, null, 4)}
            </pre> */}
            {categories.map(cat => {
                return (
                    <Link
                        key={`WeRepairCat-${cat.documentId}`}
                        href={`/tools/${cat.documentId}`}
                        className={styles.link}
                    >
                        <h4
                            className={styles.title}
                        >
                            {cat.title}
                        </h4>
                        {/* <pre>
                            {JSON.stringify(cat.image.data.url, null, 4)}
                        </pre> */}
                        <Image
                            src={process.env.NEXT_PUBLIC_BACK_DOMAIN + cat.image.url}
                            alt={cat.image.alternativeText || ''}
                            // width={cat.attributes.image.data.attributes.width}
                            // height={cat.attributes.image.data.attributes.height}
                            className={styles.image}
                            fill={true}
                            sizes="max-width: 300px"
                        // width={cat.image.width}
                        // height={cat.image.height}

                        />
                    </Link>
                )
            })}
        </div>
    )
}