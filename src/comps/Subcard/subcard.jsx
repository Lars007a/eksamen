import styles from "./subcard.module.css";
import gradient from "../../assets/images/gradientBc.png";
import { IoIosCheckmark } from "react-icons/io";
import Button from "../button/button";
import { Link } from "react-router-dom";

export default function AbonementerCard({obj}) {

    return <article className={styles.card}>
        <div className={styles.top}>
            <img src={obj.image} alt="billed af træner"></img>
        <div className={styles.bubble} style={{"--gradient": `url(${gradient})`}}>
            <span>{obj.price} DKK</span>
            <span>Mdr</span>
        </div>
        </div>


        <h2>{obj.title}</h2>

        <div className={styles.info}>
            {obj.list.map((element, index) => {
                return <div key={index}>
                <IoIosCheckmark/>
                <span>{element}</span>
            </div>
            })}
        </div>

        <Link to={`/pricing`}>
        <Button centered={true} fullWidth={false} submit={false} text={"Tilmeld dig nu!"} marginTop={false} transparrent={false}/>
        </Link>
    </article>
}