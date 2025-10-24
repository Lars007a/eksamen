import styles from "./contact.module.css";
import pic from "../../assets/images/contact_us.png"
import bc from "../../assets/images/contact_us_background.jpg";
import bc2 from "../../assets/images/contact_us.jpg";
import Button from "../button/button";
import { toast } from "react-toastify";
import { useSendDataRequest } from "../../hooks/useSendRequest";


export default function Contact({}) {

    const sender = useSendDataRequest();

    const sendform = (event) => {

        event.preventDefault();

        const fd = new FormData(event.currentTarget);

        const name = fd.get("name");
        const email = fd.get("email");
        const tlf = fd.get("tlf");
        const subject = fd.get("subject");
        const msg = fd.get("msg");


        if(!name || !email || !tlf || !subject || !msg) {
            toast.error("Skal fylde felterne ud!");
            return;
        }

        if(isNaN(tlf)) {
            toast.error("Skal være et telefon nummber!");
            return;
        }

        if(!email.includes("@")) {
            toast.error("Emailen skal være en email!");
            return;
        }

        sender.sendJson("message", JSON.stringify({name: name, email: email, phone: Number(tlf), subject: subject, message: msg}), "POST").then((val) => {
            if(val.status != "ok") {
                throw new Error(val.message || "Skete en fejl.");
            }

            toast.success("Beskeden blev sendt!");

        }).catch((error) => {
            toast.error(error.message);
        });


    }

    return <section className={styles.contact} style={{"--pic": `url(${bc})`, "--pic2": `url(${bc2})`}}>
        <div className={`container`}>
            <div className={` ${styles.content}`}>


        <img src={pic} alt="Biled af en der træner"/>
        <h2 className={`smallTitle`}>Kontakt os</h2>
        <h1>Send os en besked og vi svarer hurtigst muligt</h1>

        <form onSubmit={sendform}>
            <div>
            <input type="text" placeholder="Navn" name="name" />
            <input type="tel" placeholder="Telefon" name="tlf" />
            </div>
            <div>
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Emne" name="subject" />
            </div>
            <textarea name="msg" placeholder="Besked"></textarea>
            <Button submit={true} text={"Send"} transparrent={true} fullWidth={false} centered={true}/>
        </form>
        </div>
        </div>
    </section>
}