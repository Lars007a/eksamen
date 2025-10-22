import styles from "./blogPostCard.module.css";
import gradient from "../../assets/images/gradientBc.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogPostCard({obj}) {


    const [dateObj, setDateObj] = useState({}); //Objekt til at holde på datoen med keys som month og day.

    useEffect(() => {
        const rawDate = new Date(obj.createdAt); //Få et js objekt af datoen.
        const formattedDate = { month: rawDate.toLocaleString("da-DK", {
            month: "short"
        }), 
        day: rawDate.toLocaleString("da-DK", {
            day: "2-digit",
        })} //formattere datoen med tolocalestring, og bare put ind month og day i hver sin, så vi kun får det tilbage.

        setDateObj(formattedDate);
        
        

        

    }, [obj.createdAt])



    return <article className={styles.card}>
          <div className={styles.top}>
            
            <img src={obj.image} alt="Blog-billed"></img>

            <div className={styles.bubble} style={{"--gradient": `url(${gradient})`}}>
                <span>{dateObj.day}</span>
                <span>{dateObj.month}</span>
            </div>
        </div>



        <div className={styles.info}>

        <h2>{obj.title}</h2>

        <p className={styles.text}>
            {obj.teaser}
        </p>
        <Link to={`/blog/${obj._id}`}>Læs mere</Link>
        </div>
        
    </article>

}