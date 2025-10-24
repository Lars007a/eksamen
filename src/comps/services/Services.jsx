import styles from "./Services.module.css";
import gradient from "../../assets/images/gradientBc.png";
import { useSendGetRequest } from "../../hooks/useSendRequest";
import Spinner from "../spinner/spinner";
import MsgBox from "../msgBox/MsgBox";
import Button from "../button/button";
import { Link } from "react-router-dom";

export default function Services({}) {
    
    const result = useSendGetRequest("services");
    
    return <section className={styles.sec} style={{"--pic": `url(${gradient})`}}>
        <header>
            <div className="container">
                <h2 className={`smallTitle ${styles.subtitle}`}>Vores tjenester</h2>
                <h1>Løsninger til at bevæge sig bedre og føle sig sundere</h1>
            </div>
        {result.loading && <Spinner centered margin/>}
        {result.error && <MsgBox msg={result.error} centered margin/>}
        </header>

        <div className={`container ${styles.grid}`}>
        {result.data &&

            result.data.map((element) => {
                return <article key={element._id} className={styles.card}>
            <img className={styles.bc} src={element.image} alt="baggrundsbilled"></img>

            <div>
                <img src={element.icon} alt="ikon" />
                <h4>{element.title}</h4>
                <p>{element.teaser}</p>
            </div>
        </article>
            })}


        </div>

        
            <Link to={`/pricing`} className={styles.btn}>
                <Button text={"Tilmeld dig nu"} centered transparrent={false} />
            </Link>

    </section>
}