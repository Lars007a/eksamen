import styles from "./trainersSection.module.css";
import bgImg from "../../assets/images/gradientBc.png";
import {useSendGetRequest} from "../../hooks/useSendRequest.jsx";
import { useEffect, useState } from "react";
import Spinner from "../spinner/spinner.jsx";
import MsgBox from "../msgBox/MsgBox.jsx";
import TrainerCard from "../trainerCard/trainerCard.jsx";

export default function trainersSection({frontpage = false}) {


    const result = useSendGetRequest("/employees");
    const [arrayToShow, setArrayToShow] = useState([]);
    //Hent data her.

    useEffect(() => {
        if(result.data == null) return;

        if(!frontpage) {
            setArrayToShow(result.data);
            return;
        }

        const copy = [...result.data];
        const newArray = copy.splice(0, 3);
        setArrayToShow(newArray);

    }, [result.data])

    return <section className={`${styles.sec} ${frontpage == false && styles.otherPage}`} style={{"--pic": `url(${bgImg})`}}>
        <div className={`container ${styles.section}`}>
            <h2 className={`smallTitle ${styles.subtitle}`}>Trænere</h2>
            <h1>VORES HOLD AF EKSPERTER</h1>

            <div className={styles.grid}>
                {result.loading && <Spinner />}
                {result.error && <MsgBox margin={true} msg={result.error}/>}
                {result.data && arrayToShow.length > 0 && arrayToShow.map((element) => {
                    return <TrainerCard frontpage={frontpage} obj={element} key={element._id}/>
                })}
            </div>
        </div>
    </section>

}