import styles from "./button.module.css";
import buttonBackground from "../../assets/images/gradientBc.png"
import { FaPlay } from "react-icons/fa";



export default function Button({text, transparrent = true, fullWidth=false, click, marginTop=false, submit=false, centered}) {


    return <button type={submit ? "submit" : "button"} onClick={click} className={`${styles.button} ${transparrent && styles.transparrent} ${centered && styles.center} ${fullWidth && styles.fullWidth} ${marginTop && styles.top}`} style={{"--pic": `url(${buttonBackground})`}}>
                <span>{text}</span>
                
                <div className={styles.icon}>
                    <FaPlay/>
                </div>
                
                </button>

}