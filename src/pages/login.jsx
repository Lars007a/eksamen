import Header from "../comps/header/header";
import LoginForm from "../comps/backofficeComps/LoginForm/LoginForm";
import loginHeader from "../assets/headers/loginHeader.png";

export default function Login({}) {
    return <>
    <Header pic={loginHeader} title="login"/>
    <LoginForm/>
    </>
}