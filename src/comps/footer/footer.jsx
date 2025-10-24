import styles from "./footer.module.css";
import logo from "../../assets/icons/logo.png"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaPlay } from "react-icons/fa";



export default function Footer({}) {

    const [show, setShow] = useState(true); /* om footeren overhovedet bliver vist. */
    const loc = useLocation(); /* til at se hvilken side, vi er på. */


    useEffect(() => { /* til at fjerne footeren fra backoffice siden. */
        if(loc.pathname.includes("/backoffice")) {
            setShow(false);
            return;
        }

        setShow(true);
    }, [loc.pathname])


    return show && <footer className={styles.footer}>
        <div className={`container ${styles.content}`}>

            <div className={`${styles.socials}`}>
                <img src={logo} alt="Logo"></img>
                <p className={styles.grey}>Hos os handler træning om glæde, kvalitet og resultater</p>


                <ul>
                    <Link to={"https://facebook.com"}>
                    <FaFacebookF/>
                    </Link>
                    <Link to={"https://twitter.com"}>
                    <FaTwitter/>
                    </Link>
                    <Link to={"https://instagram.com"}>
                    <FaInstagram/>
                    </Link>
                </ul>

            </div>
        

            <nav className={styles.quickNav}>
                <h2>Hurtige links</h2>
                <ul>
                    <li><Link to={{pathname: `/`, hash: "#top"}}><FaPlay/>Forside</Link></li>
                    <li><Link to={`/about`}><FaPlay/>Om</Link></li>
                    <li><Link to={`/services`}><FaPlay/>Tjenester</Link></li>
                    <li><Link to={`/employees`}><FaPlay/>Trænere</Link></li>
                    <li><Link to={`/pricing`}><FaPlay/>Priser</Link></li>
                </ul>
            </nav>


            <div className={`${styles.contact}`}>
                <h2>Kontakt os</h2>

                <article>
                    <p>Adresse:</p>
                    <p className={styles.grey}>Nørregade 42, 9000 Aalborg</p>
                </article>

                <article>
                    <p>Email:</p>
                    <p className={styles.grey}>info@xtremefitness.dk</p>
                </article>

                <article>
                    <p>Telefon:</p>
                    <p className={styles.grey}>+ 45 99751642</p>
                </article>
            </div>

            </div>
            <div className={styles.copyright}>
                <p>Copyright 2025 xtremefitness.dk - All Rights Reserved</p>
            </div>
    </footer>
}