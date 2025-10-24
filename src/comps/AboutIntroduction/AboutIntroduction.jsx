import styles from "./AboutIntroduction.module.css";
import pic from "../../assets/images/about_us2.png";
import gradient from "../../assets/images/gradientBc.png";
import vid from "../../assets/video/aboutVideo.mp4";
import vidThumbnail from "../../assets/video/video_img.jpg";
import vidImageIcon from "../../assets/icons/video_img_icon.png";
import { useRef } from "react";

export default function AboutIntroduction({}) {

    const vidRef = useRef(null);


    const playVideo = (event) => {
        if(vidRef.current == null) return;

        vidRef.current.play();
        vidRef.current.setAttribute("controls", "true");
        event.currentTarget.style.display = "none";

    }

    return <section className={styles.sec}>
        <div className={`container`}>
        <header>
            <div className={styles.imgBox}>
                <img src={pic} alt="billed af folk der træner med cirkel omkring dem." />
            </div>
            <div className={styles.textBox}>
                <h2 className="smallTitle">Om os</h2>
                <h1>Velkommen til xtreme fitness</h1>
                <p>Xtreme Fitness er stedet, hvor sved, grin og god musik går hånd i hånd. Vi lover ikke mirakler - men vi lover, at du bliver stærkere, gladere og får ondt i muskler, du ikke vidste, du havde!</p>
            </div>
        </header>
        </div>

        <article className={`${styles.stats}`} style={{"--gradient": `url(${gradient})`}}>
            <div className={`container ${styles.content}`}>

                <div className={styles.info}>
                    <p>600k+</p>
                    <p>working hours</p>
                </div>

                <div className={styles.info}>
                    <p>600k+</p>
                    <p>working hours</p>
                </div>

                <div className={styles.info}>
                    <p>600k+</p>
                    <p>working hours</p>
                </div>

                <div className={styles.info}>
                    <p>600k+</p>
                    <p>working hours</p>
                </div>
            </div>
        </article>


        <footer>
            <div className="container">

                <div className={styles.videoCon}>

                    <video poster={vidThumbnail} ref={vidRef}>
                        <source src={vid} type="video/mp4"/>
                    </video>
                        <img onClick={playVideo} className={styles.clickPlay} src={vidImageIcon} alt="klik for at spille video" />
                </div>
            </div>
        </footer>



    </section>


}