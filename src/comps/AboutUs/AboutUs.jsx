import styles from "./AboutUs.module.css";
import bg1 from "../../assets/images/about_us.png";
import bg2 from "../../assets/images/about_us_background.jpg";
import aboutPic from "../../assets/images/about_us2.png";
import Button from "../button/button";

export default function AboutUs({}) {
    return <section className={styles.aboutus} style={{"--bgOne": `url(${bg1})`, "--bgTwo": `url(${bg2})`}}>
        <div className={`container`}>
            <div className={styles.content}>

                <header>
                    <img src={aboutPic} alt="About us billed"></img>
                    <h2 className={`smallTitle ${styles.subtitle}`}>Om os</h2>
                    <h1>Velkommen til xtreme fitness</h1>
                </header>

                <p>Xtreme Fitness er stedet, hvor sved, grin og god musik går hånd i hånd. Vi lover ikke mirakler - men vi lover, at du bliver stærkere, gladere og får ondt i muskler, du ikke vidste, du havde!</p>


                <div className={styles.grid}>
                    <div>
                        <h2>600K+</h2>
                        <h4>ARBEJDSTIMER</h4>
                    </div>
                    <div>
                        <h2>790+</h2>
                        <h4>PROGRAMMER</h4>
                    </div>
                    <div>
                        <h2>2560+</h2>
                        <h4>GLADE KUNDER</h4>
                    </div>
                    <div>
                        <h2>2560+</h2>
                        <h4>SUNDERE KROPPE</h4>
                    </div>
                </div>

                <div className={styles.btnCon}>
                    <Button centered={false} text={"Læs mere"} fullWidth={false} submit={false} transparrent={true}/>
                    </div>


            </div>
        </div>
    </section>
}