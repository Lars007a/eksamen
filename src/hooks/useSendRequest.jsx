import { useLocalStorage } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";

export function useSendGetRequest(endpoint) {
 const apiUrl = "https://xtremefitness-backend.onrender.com/";

    const [data, setData] = useState(null); /* data vi får tilbage. */
    const [error, setError] = useState(null); /* fejl, hvis vi får en. */
    const [loading, setLoading] = useState(false); /* Om vi venter på en request bliver færdig. */

    function get(endpoint) {
        setLoading(true);
        setError(null);
      fetch(`${apiUrl}/${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((val) => {
            if(!val.ok) {
                throw new Error("Skete en fejl. Prøv igen...");
            }
            return val.json();
        }).then((val) => {
            setData(val.data);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => { /* kør denne med det samme, med endpointet. */
        get(endpoint);
    }, [])


    return {data, error, loading, get} /* return state variablerne, samt funktionen, der opdater state variablerne ved at sende en ny request. */
}

export function useSendDataRequest() {

    const apiUrl = "https://xtremefitness-backend.onrender.com/";
    const [user, setUser] = useLocalStorage("user", null);

    //Funktion til at sende json data.
    function sendJson(endpoint, body, method) {

        const promise = fetch(`${apiUrl}/${endpoint}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "authorization": user != null ? `Bearer ${user?.token}` : null,
            },
            body: body,
        }).then((val) => {
            return val.json();
        });

        return promise;
    }

    //Funktion til at sende formdata.
    function sendForm(endpoint, body, method) {
        const promise = fetch(`${apiUrl}/${endpoint}`, {
            method: method,
            headers: {
                "authorization": user != null ? `Bearer ${user?.token}` : null,
            },
            body: body,
        }).then((val) => {
            return val.json();
        });

        return promise;
    }

    //Retunere funktionerne, så man kan bruge dem, hvor og når man ville.
    return {sendJson, sendForm}
}