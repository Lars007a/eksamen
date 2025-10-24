import styles from "./blogDetails.module.css";

export default function BlogDetails({obj}) {
    return <section className={`${styles.sec} container`}>

        <header>
            <img src={obj.image} alt="" />
            <h1>{obj.title}</h1>
        </header>

        <p>{obj.content}</p>

        <footer>
            <p>Forfatter: {obj.author}</p>
            <p>Oprettet: {new Date(obj.createdAt).toLocaleString("da-DK", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }).replaceAll(/\./g, "/")}</p>
        </footer>

    </section>
}