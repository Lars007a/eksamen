import Header from "../comps/header/header";
import headerImg from "../assets/headers/mainHeader.jpg";
import Contact from "../comps/contact/contact";
import TrainersSection from "../comps/trainersSection/trainersSection";
import Abonementer from "../comps/abonementer/abonementer";

export default function Frontpage({}) {
    return <>
    <Header frontpage={true} pic={headerImg}/>
    <TrainersSection/>
    <Abonementer/>
    <Contact/>
    </>
}