import styles from './Avatar.module.css'

// destructuring assignment
export function Avatar({ hasBorder = true, src }) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    );
}