import Header from "../comps/header/header";
import headerImg from "../assets/headers/mainHeader.jpg";
import Contact from "../comps/contact/contact";
import TrainersSection from "../comps/trainersSection/trainersSection";
import Subs from "../comps/subscriptions/subscriptions.jsx";
import LatestPost from "../comps/latestPost/latestPost.jsx";
import StatementsSec from "../comps/statementsSec/statementsSec.jsx";
import Exercises from "../comps/exercises/exercises.jsx";
import AboutUs from "../comps/AboutUs/AboutUs.jsx";
import Services from "../comps/services/Services.jsx";

export default function Frontpage({}) {
    return <>
    <Header frontpage={true} pic={headerImg}/>
    <Exercises/>
    <AboutUs/>
    <Services/>
    <StatementsSec/>
    <Subs/>
    <TrainersSection frontpage/>
    <Contact/>
    <LatestPost/>


    </>
}