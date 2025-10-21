import { useSendGetRequest } from "../../hooks/useSendRequest";
import styles from "./abonementer.module.css";
import Spinner from "../spinner/spinner.jsx";
import MsgBox from "../msgBox/MsgBox";
import AbonementerCard from "../abonementerCard/AbonementerCard";

export default function Abonementer({}) {

    const req = useSendGetRequest("/subscriptions");


    return <section className={styles.subs}>
        <div className={`${styles.content} container`}>
            <h2 className={`smallTitle ${styles.price}`}>Priser</h2>
            <h1>Vores abonementer</h1>

            <div className={styles.grid}>
                {req.loading && <Spinner/>}
                {req.error && <MsgBox msg={req.error} margin={true}/>}
                {req.data && req.data.map((element) => {
                    return <AbonementerCard obj={element} key={element._id}/>
                })}
            </div>
        </div>
    </section>
}