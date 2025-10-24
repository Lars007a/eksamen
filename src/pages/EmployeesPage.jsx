import Header from "../comps/header/header";
import p from "../assets/headers/employeesHeader.jpg";
import Contact from "../comps/contact/contact.jsx";
import LatestPost from "../comps/latestPost/latestPost.jsx";
import TrainersSection from "../comps/trainersSection/trainersSection.jsx";

export default function EmployeesPage({}) {
    return <>
    <Header pic={p} title="Trænere"/>
    <TrainersSection/>
    <Contact/>
    <LatestPost/>
    </>
}