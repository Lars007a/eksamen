import styles from "./nav.module.css";
import Logo from "../../assets/icons/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function Navbar({}) {

    const [show, setShow] = useState(true); /* om navbaren overhovedet bliver vist. */
    const loc = useLocation(); /* til at se hvilken side, vi er på. */

    const [scrollEffect, setScrollEffect] = useState(false); /* scrolleffekt, så der er en effekt når vi scroller ned. */

    const [menuActive, setMenuActive] = useState(false); /* om menu'en bliver vist. */

    const [user, setUser] = useLocalStorage("user", null); /* til at ændre login linket i urlbaren. */

    const logout = () => {
        setUser(null);
    }

    useEffect(() => { /* til at fjerne navbaren fra backoffice siden. */
        if(loc.pathname.includes("/backoffice")) {
            setShow(false);
            return;
        }

        setShow(true);
    }, [loc.pathname])

    const handleScroll = (event) => { /* til at tilføje scroll effekt. */
        if(window.scrollY > 150) {
            setScrollEffect(true);
            return;
        }

        setScrollEffect(false);
    }

    useEffect(() => { /* til at tilføje scroll effekt. */
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const toggleMenu = (event) => { /* til at tilføje meny'en, når man klikker. */
        if(menuActive) {
            setMenuActive(false); 
            return;
        }

        setMenuActive(true);

    }

    return show && <nav className={`${styles.nav} ${scrollEffect && styles.scroll}`}>
        <div className={`container ${styles.content}`}>
            <NavLink to={`/`}>    
                <div className={styles.logo} style={{backgroundImage: `url(${Logo})`}}></div>
            </NavLink>
            
            <div className={`${styles.hamburger} ${menuActive ? styles.active : ""}`} onClick={toggleMenu}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>


            <div className={`${styles.menu} ${menuActive ? styles.show : ""}`}>
                <ul className={`container ${styles.links}`} onClick={toggleMenu}>
                    <li><NavLink to={`/`}>Forside</NavLink></li>
                    <li><NavLink  to={`/services`}>Tjenester</NavLink></li>
                    <li><NavLink to={`/employees`}>Trænere</NavLink></li>
                    <li><NavLink to={`/pricing`}>Priser</NavLink></li>
                    <li><NavLink to={`/about`}>Om os</NavLink></li>
                    {user == null ? <li><NavLink to={`/login`}>Login</NavLink></li> : <li onClick={logout}><a>Logout</a></li>}
                </ul>
            </div>

        </div>
    </nav>

}