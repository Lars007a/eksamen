import styles from "./trainersSection.module.css";
import bgImg from "../../assets/images/gradientBc.png";
import {useSendGetRequest} from "../../hooks/useSendRequest.jsx";
import { useEffect } from "react";
import Spinner from "../spinner/spinner.jsx";
import MsgBox from "../msgBox/MsgBox.jsx";

export default function trainersSection({}) {


    const result = useSendGetRequest("/employees");

    //Hent data her.

    return <section className={styles.sec} style={{"--pic": `url(${bgImg})`}}>
        <div className={`container ${styles.section}`}>
            <h2 className="smallTitle">Trænere</h2>
            <h1>VORES HOLD AF EKSPERTER</h1>

            <div className={styles.grid}>
                {result.loading && <Spinner />}
                {result.error && <MsgBox margin={true} msg={result.error}/>}
            </div>
        </div>
    </section>

}