import styles from "./header.module.css";
import Button from "../button/button";
import { Link } from "react-router-dom";

export default function Header({frontpage = false, title = "Eksempel", pic, blackNoPic=false}) {
    

    
    return <header className={`${styles.header} ${frontpage && styles.frontpage} ${blackNoPic == true && styles.blackNoPic}`} style={{"--pic": `url(${pic})`}}>

    <div className="container">

        <div className={`${styles.content}`}>
            
            <div className={styles.boxWithBorder}>
                {frontpage && <h2 className="smallTitle">Xtreme Fitness</h2>}
                <h1>{frontpage ? "Bliv stærk" : title}</h1>
            </div>
            {frontpage && <p>Det bedste fitnesscenter — hvor styrke og sundhed vokser sammen.</p>}
            {frontpage && (
                <div className={styles.btn}> 
                    <Link to={`/pricing`}><Button transparrent={true} centered={false} text={"Tilmeld dig nu"} fullWidth={false} marginTop={false}/></Link>
                </div>
        )}
        </div>
        </div>
    </header>
}