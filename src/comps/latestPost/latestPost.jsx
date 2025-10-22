import styles from "./latestPost.module.css";
import {useSendGetRequest} from "../../hooks/useSendRequest";
import MsgBox from "../msgBox/MsgBox";
import Spinner from "../spinner/spinner";
import BlogPostCard from "../blogPostCard/blogPostCard";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";


export default function LatestPost({}) {


    const result = useSendGetRequest("/blogs");

    const [toShow, setToShow] = useState([]);


    useEffect(() => {
        if(result.data == null) return;


        const newArray = [...result.data]; /* lav en copy af alle blog indlæg arrayen. */

        newArray.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); //sortere arrayen, så vi får dem i rækkefølge.

        setToShow(newArray.slice(0, 3)); /* sæt den array der vises på siden, til at være de første tre elementer fra arrayen. */


    }, [result.data])


    return <section className={styles.latestPost}>
        <div className={`container ${styles.content}`}>

            <h2 className={`${styles.subtitle} smallTitle`}>Vores nyheder</h2>
            <h1>Seneste blogindlæg</h1>

            <div className={styles.grid}>
                {result.loading && <Spinner whiteBackground/>}
                {result.error && <MsgBox margin={false} msg={result.error}/>}
                {result.data && toShow.map((element) => {
                    return <BlogPostCard key={element._id} obj={element}/>
                })}
            </div>
        </div>
    </section>
}