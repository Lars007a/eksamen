import Header from "../comps/header/header.jsx";
import Blogdetails from "../comps/blogDetails/BlogDetails.jsx";
import { useSendGetRequest } from "../hooks/useSendRequest.jsx";
import { useParams, useSearchParams } from "react-router-dom";
import Spinner from "../comps/spinner/spinner.jsx";
import MsgBox from "../comps/msgBox/MsgBox.jsx";
import { useEffect, useState } from "react";
import useCheckId from "../hooks/useCheckId.jsx";
import BlogDetails from "../comps/blogDetails/BlogDetails.jsx";

export default function Blog({}) {

    const {id} = useParams();

    const validate = useCheckId();
    const [invalidId, setInvalidId] = useState(false);


    useEffect(() => {
        const match = validate(id);
        if(!match) {
            setInvalidId(true);
            return;
        }
        setInvalidId(false);
    }, [id])

    const result = useSendGetRequest(`blog/${id}`)

    useEffect(() => {
        console.log(result.data)
    }, [result.data])


    return <>
    <Header blackNoPic frontpage={false} title={result?.data?.title || "Ingen blog fundet"}/>

    {result.loading && invalidId != true ? <Spinner centered margin whiteBackground /> : ""}
    {result.error && <MsgBox msg={result.error} centered margin/>}
    {invalidId && <MsgBox msg={"Skal være et ordentligt ID!"} centered margin/>}

    {result.data &&
    <BlogDetails obj={result.data}/>
    
    
    }
    </>
}