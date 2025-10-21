import styles from "./contact.module.css";
import pic from "../../assets/images/contact_us.png"
import bc from "../../assets/images/contact_us_background.jpg";
import bc2 from "../../assets/images/contact_us.jpg";
import Button from "../button/button";


export default function Contact({}) {
    return <section className={styles.contact} style={{"--pic": `url(${bc})`, "--pic2": `url(${bc2})`}}>
        <div className={`container`}>
            <div className={` ${styles.content}`}>


        <img src={pic} alt="Biled af en der træner"/>
        <h2 className={`smallTitle`}>Kontakt os</h2>
        <h1>Send os en besked og vi svarer hurtigst muligt</h1>

        <form>
            <input type="text" placeholder="Navn" name="name" />
            <input type="text" placeholder="Navn" name="name" />
            <input type="text" placeholder="Navn" name="name" />
            <input type="text" placeholder="Navn" name="name" />
            <textarea name="msg" placeholder="Besked"></textarea>
            <Button submit={true} text={"Send"} transparrent={true} fullWidth={false} centered={true}/>
        </form>
        </div>
        </div>
    </section>
}