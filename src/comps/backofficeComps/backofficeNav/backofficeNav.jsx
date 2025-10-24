import Button from "../../button/button";
import BlogAdmin from "../BlogAdmin/BlogAdmin";
import styles from "./backofficeNav.module.css";

export default function BackofficeNav({setter, logoutFunc}) {
    return <nav className={styles.nav}>
        <ul className="container">
            <li>
                <Button transparrent={false} text={"Blog"} fullWidth={true} click={() => {
                    setter(<BlogAdmin/>);
                }}/>
            </li>

            <li>
                    <Button transparrent={false} text={"Logud"} fullWidth={true} click={() => {
                    logoutFunc(null);
                }}/>
            </li>
        </ul>

    </nav>
}