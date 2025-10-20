import styles from "./footer.module.css";
import logo from "../../assets/icons/logo.png"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Footer({}) {
    return <footer className={styles.footer}>
            <div className={`container ${styles.socials}`}>
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
        
            <div className={styles.divider}></div>

            <div className={`container ${styles.contact}`}>
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

            <div className={styles.copyright}>
                <p>Copyright 2025 xtremefitness.dk - All Rights Reserved</p>
            </div>
    </footer>
}