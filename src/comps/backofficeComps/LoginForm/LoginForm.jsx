import { FaPlay } from "react-icons/fa";
import Button from "../../button/button";
import styles from "./LoginForm.module.css";
import gradient from "../../../assets/images/gradientBc.png";
import { useSendDataRequest } from "../../../hooks/useSendRequest";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

export default function LoginForm({}) {

    const sender = useSendDataRequest();
    const redirect = useNavigate();
    const [user, setUser] = useLocalStorage("user", null);

    useEffect(() => {
        //Når siden loader, se om brugeren allerede er logged in.


        //Hvis brugeren ikke er null, send en request hvor jeg authorizer token.
        //Hvis ikke authroized, sæt token til null.
        //Hvis authorized, så er de allerede logget ind, og har en god token.
        //Derfor tjek om de er admin eller ikke.
        //Hvis admin, redirect dem til backoffice.
        //Ellers redirect dem til forsiden.

        if(user == null) return;

            sender.sendJson("auth/token", JSON.stringify({token: user?.token}), "POST").then((val) => {
            if(val.status != "ok") {
                throw new Error("bad token");
            }

            //Se om de har admin rollen.
            if(val.data.role == "admin") {
                redirect(`/backoffice`);
                return;
            }
            redirect(`/`);
            return;

        }).catch((error) => {
            setUser(null); //Hvis token ikke godkendt. Slet brugeren. Og lad dem komme ind på loginsiden.
        })
    }, [])


    const submit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);

        const email = fd.get("email");
        const password = fd.get("password");

        if(email.length == 0 || password.length == 0) {
            toast.error("Fejl. Skal skrive noget ind!");
            return;
        }

        if(!email.includes("@")) {
            toast.error(`Skal være et "@" i emailen!`);
            return;
        }


        sender.sendJson("auth/signin", JSON.stringify({email: email, password: password}), "POST").then((val) => {
            if(val.status != "ok") {
                throw new Error("Fejl. Eventuelt forkert email eller password.");
            }
            
            const userObject = jwtDecode(val.data.token);
            toast.success("Logged in!");

            setUser({token: val.data.token, obj: userObject})

            //Hvis admin, login til backoffice, ellers login til forsiden.
            if(userObject.role == "admin") {
                redirect(`/backoffice`);
                return;
            }else {
                redirect(`/`);
                return;
            }

        }).catch((error) => {
            toast.error(error.message);
        });


        
    }

    return <section className={styles.loginSec}>
        <div className={`container ${styles.content}`}>


            <h2 className="smallTitle">LOG IND FOR AT TILMELDE DIG DAGENS TRÆNING</h2>
            <h1>Log ind</h1>


            <form onSubmit={submit} noValidate>

                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button type="submit" className={`${styles.btn}`} style={{"--pic": `url(${gradient})`}}>
                    <span>Log ind</span>                
                    <div className={styles.icon}>
                        <FaPlay/>
                    </div>            
                </button>

            </form>

        </div>
    </section>
}