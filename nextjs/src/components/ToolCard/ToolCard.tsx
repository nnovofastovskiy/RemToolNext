import Link from "next/link"
import Image from "next/image";
import { ToolCardProps } from "./ToolCard.props"
import styles from "./ToolCard.module.scss";
import cn from "classnames";

export const ToolCard = ({ catId, tool, className, ...props }: ToolCardProps) => {
    return (
        <Link
            href={`/tools/${catId}/${tool.id}`}
            className={cn(className, styles.wrapper)}
        >
            <span className={styles.title}>{tool.attributes.title}</span>
            <div
                className={styles.image}
            >
                <Image
                    src={process.env.NEXT_PUBLIC_BACK_DOMAIN + tool.attributes.image.data.attributes.url}
                    alt={tool.attributes.image.data.attributes.alternativeText || ''}
                    fill={true}
                />
            </div>
        </Link>
    )
}