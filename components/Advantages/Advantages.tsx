import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <div>
            {advantages.map((m) => (
                <div key={m._id} className={styles.advantage}>
                    <CheckIcon />
                    <div className={styles.title}>{m.title}</div>
                    <hr className={styles.vline} />
                    <div className={styles.description}>{m.description}</div>
                </div>
            ))}
        </div>
    );
};
