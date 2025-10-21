import { useState, useEffect } from "react";

export function useSendGetRequest(endpoint) {
 const apiUrl = "http://127.0.0.1:3042";

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