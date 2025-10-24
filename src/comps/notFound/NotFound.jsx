import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFoundComp({}) {

    return <section className={styles.sec}>
        <div className={`container ${styles.content}`}>
            <h2 className="smallTitle">404</h2>
            <h1>Fejl. Siden blev ikke fundet.</h1>
            <Link to={`/`}>Tilbage til forsiden</Link>
        </div>
    </section>
}