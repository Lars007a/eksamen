import ServicesHeader from "../assets/headers/ServicesHeader.png";
import Header from "../comps/header/header";
import LatestPost from "../comps/latestPost/latestPost";
import Services from "../comps/services/Services";
import Testimonials from "../comps/statementsSec/statementsSec";
import trainersSection from "../comps/trainersSection/trainersSection";
import Exercises from "../comps/exercises/exercises";

export default function ServicesPage({}) {
    return <>
        <Header pic={ServicesHeader} title="Tjenester"/>
        <Exercises/>
        <Services/>
        <Testimonials/>
        <LatestPost/>
    </>
}