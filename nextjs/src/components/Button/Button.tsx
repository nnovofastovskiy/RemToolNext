import { ButtonProps } from "./Button.props"
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ type, text, children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(className, styles.button, {
                [styles.primary]: type === 'primary',
                [styles.ghost]: type === 'ghost',
            })}
            {...props}
        >
            {text}
            {children}
        </button>
    )
}