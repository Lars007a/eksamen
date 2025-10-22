import styles from "./header.module.css";
import Button from "../button/button";

export default function Header({frontpage = false, title = "Eksempel", pic}) {
    

    
    return <header className={`${styles.header} ${frontpage && styles.frontpage}`} style={{"--pic": `url(${pic})`}}>
        {frontpage && <h2 className="smallTitle">Xtreme Fitness</h2>}
        <h1>{frontpage ? "Bliv stærk" : title}</h1>
        {frontpage && <p>Det bedste fitnesscenter — hvor styrke og sundhed vokser sammen.</p>}
        {frontpage && <Button transparrent={true} text={"Tilmeld dig nu"} fullWidth={false} marginTop={true}/>}
    </header>
}