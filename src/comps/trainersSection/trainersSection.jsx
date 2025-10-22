import styles from "./trainersSection.module.css";
import bgImg from "../../assets/images/gradientBc.png";
import {useSendGetRequest} from "../../hooks/useSendRequest.jsx";
import { useEffect } from "react";
import Spinner from "../spinner/spinner.jsx";
import MsgBox from "../msgBox/MsgBox.jsx";
import TrainerCard from "../trainerCard/trainerCard.jsx";

export default function trainersSection({}) {


    const result = useSendGetRequest("/employees");

    //Hent data her.

    return <section className={styles.sec} style={{"--pic": `url(${bgImg})`}}>
        <div className={`container ${styles.section}`}>
            <h2 className={`smallTitle ${styles.subtitle}`}>Trænere</h2>
            <h1>VORES HOLD AF EKSPERTER</h1>

            <div className={styles.grid}>
                {result.loading && <Spinner />}
                {result.error && <MsgBox margin={true} msg={result.error}/>}
                {result.data && result.data.map((element) => {
                    return <TrainerCard obj={element} key={element._id}/>
                })}
            </div>
        </div>
    </section>

}