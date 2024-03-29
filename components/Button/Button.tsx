import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({
    className,
    appearance,
    children,
    arrow = 'none',
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(className, styles.button, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && (
                <span
                    className={cn(styles.arrow, {
                        [styles.down]: arrow === 'down',
                        [styles.right]: arrow === 'right',
                    })}
                >
                    <ArrowIcon />
                </span>
            )}
        </button>
    );
};
