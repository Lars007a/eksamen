import { Link } from "react-router-dom";
import styles from "./trainerCard.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


export default function TrainerCard({obj, frontpage}) {
    return <article className={`${styles.card} ${frontpage == false && styles.otherPage}`}>
        <img src={obj.image}  alt={`Billed af træner ${obj.name}`} />
        <h2>{obj.name}</h2>
        <span>{obj.area}</span>

        <ul>
            <li><Link to={"https://facebook.com"}><FaFacebookF/></Link></li>
            <li><Link to={"https://twitter.com"}><FaTwitter/></Link></li>
            <li><Link to={"https://instagram.com"}><FaInstagram/></Link></li>
        </ul>
    </article>
}