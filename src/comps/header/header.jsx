import styles from "./header.module.css";
import vidIcon from "../../assets/icons/video_img_icon.png";

export default function Header({frontpage = false, title = "Eksempel", pic}) {
    

    
    return <header className={`${styles.header} ${frontpage && styles.frontpage}`} style={{"--pic": `url(${pic})`}}>
        {frontpage && <h2>Xtreme Fitness</h2>}
        <h1>{frontpage ? "Bliv stærk" : title}</h1>
        {frontpage && <p>Det bedste fitnesscenter — hvor styrke og sundhed vokser sammen.</p>}
        {frontpage && <button><a href="Hej">
            <span>Tilmeld dig nu</span><img src={vidIcon} alt="video icon"></img>
            </a>
            </button>}
    </header>
}