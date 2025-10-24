import Header from "../comps/header/header";
import p from "../assets/headers/aboutHeader.png";
import AboutIntroduction from "../comps/AboutIntroduction/AboutIntroduction.jsx";
import Contact from "../comps/contact/contact.jsx";
import LatestPost from "../comps/latestPost/latestPost.jsx";

export default function Frontpage({}) {
    return <>
    <Header frontpage={false} pic={p} title="Om os"/>
    <AboutIntroduction/>
    <Contact/>
    <LatestPost/>
    </>
}