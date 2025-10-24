import Header from "../comps/header/header";
import p from "../assets/headers/subscriptionsHeader.png";
import Contact from "../comps/contact/contact.jsx";
import LatestPost from "../comps/latestPost/latestPost.jsx";
import TrainersSection from "../comps/trainersSection/trainersSection.jsx";
import Subs from "../comps/subscriptions/subscriptions.jsx";
import StatementsSec from "../comps/statementsSec/statementsSec.jsx";

export default function Pricing({}) {
    return <>
    <Header pic={p} title="Priser"/>
    <Subs/>
    <StatementsSec/>
    <LatestPost/>
    </>
}