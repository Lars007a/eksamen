import { useEffect, useState } from "react";
import BackofficeNav from "../comps/backofficeComps/backofficeNav/backofficeNav";
import { useLocalStorage } from "@uidotdev/usehooks";
import LoginForm from "../comps/backofficeComps/LoginForm/LoginForm";
import { useSendDataRequest } from "../hooks/useSendRequest";
import { useLocation, useNavigate } from "react-router-dom";
import BlogAdmin from "../comps/backofficeComps/BlogAdmin/BlogAdmin";

export default function Backoffice({}) {
    
    const [page, setPage] = useState(<BlogAdmin/>); //Siden der skal vises.
    const [user, setUser] = useLocalStorage("user", null); //Få brugeren fra localstorage.
    const [access, setAccess] = useState(false); //By default, så er man ikke logged in.

    const sender = useSendDataRequest(); //Til at sende en request til at checke login token.

    const redirecter = useNavigate(); //Redirect når man ikke er logged in.

    useEffect(() => {

        //Lav et auth check her med token.
        sender.sendJson("auth/token", JSON.stringify({token: user?.token}), "POST").then((val) => {
            console.log(val);
            if(val.status != "ok") {
                throw new Error("bad token");
            }


            //Se om de har admin rollen.
            if(val.data.role != "admin") {
                throw new Error("no admin");
            }


            setAccess(true); //God token gemt i localstorage med admin credentials, så derfor access til backoffice.
            //Sæt state, så siden bliver vist.




        }).catch((error) => {
            //Har ikke credentials til backoffice. Sæt access til false.
            //Hvis grunden er en dårlig token, log dem ud.
            //Hvis ikke admin rollen, lad dem forblive logged in, men redirect dem til forsiden.

            console.log(error.message);
            setAccess(false);

            if(error.message == "bad token") {
                setUser(null);
                redirecter("/login");
            }

            if(error.message == "no admin") {
                redirecter(`/`)
            }
        })


    }, [user, user?.token, user?.obj])


    //Hvis logged in, så vis backoffice siden.
    //Remember, husk, når man først kommer ind på siden, er staten login ind, false, kun når token er checket, bliver den sat til true.
    return <>
    {access == true &&
    (<>
    <BackofficeNav setter={setPage} logoutFunc={setUser}/>
    {page}
    </>)}
    </>
}