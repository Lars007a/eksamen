import Header from "../comps/header/header";
import headerImg from "../assets/headers/mainHeader.jpg";
import Contact from "../comps/contact/contact";

export default function Frontpage({}) {
    return <>
    <Header frontpage={true} pic={headerImg}/>
    <Contact/>
    </>
}