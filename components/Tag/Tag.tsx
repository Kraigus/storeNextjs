import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
	size = "s",
	color = "ghost",
	href,
	children,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, {
				[styles.s]: size === "s",
				[styles.m]: size === "m",
				[styles.ghost]: color === "ghost",
				[styles.primary]: color === "primary",
				[styles.red]: color === "red",
				[styles.green]: color === "green",
				[styles.grey]: color === "grey",
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
