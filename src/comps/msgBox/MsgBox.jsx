import styles from "./MsgBox.module.css";

export default function MsgBox({msg, margin=false}) {
    return <article className={`${styles.box} ${margin && styles.margin}`}>
        <p>{msg}</p>
    </article>
}