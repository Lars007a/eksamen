import styles from "./MsgBox.module.css";

export default function MsgBox({msg, margin=false, centered=true}) {
    return <article className={`${styles.box} ${margin && styles.margin} ${centered && styles.center}`}>
        <p>{msg}</p>
    </article>
}