import styles from "./StatementCard.module.css";

export default function StatementCard({obj}) {
    return <article className={styles.quote}>
                                <blockquote>
                                    <p>{obj.content}</p>
                                </blockquote>
                                <div className={styles.author}>
                                    <p>{obj.author}</p>
                                    <p>{obj.position}</p>
                                </div>
                            </article>
}