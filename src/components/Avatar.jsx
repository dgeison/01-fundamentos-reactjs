import styles from './Avatar.module.css'



// export function Avatar(props) {

export function Avatar({hasBorder = true, src}) {

    // const hasBorder = props.hasBorder != false 
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt=""
        />
    )
}