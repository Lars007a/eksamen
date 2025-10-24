import Header from "../comps/header/header";
import p from "../assets/headers/mainHeader.jpg";
import Contact from "../comps/contact/contact.jsx";
import LatestPost from "../comps/latestPost/latestPost.jsx";
import TrainersSection from "../comps/trainersSection/trainersSection.jsx";
import Subs from "../comps/subscriptions/subscriptions.jsx";
import StatementsSec from "../comps/statementsSec/statementsSec.jsx";
import NotFoundComp from "../comps/notFound/NotFound.jsx";

export default function NotFound({}) {

    return <>
    <Header pic={p} title="404 - Ikke fundet!"/>
    
    <NotFoundComp/>
    </>

}