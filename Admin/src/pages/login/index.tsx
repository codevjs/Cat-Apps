import React, {useContext} from "react";
import {SessionContext} from "contexts/sessions";
import {Redirect} from "react-router-dom";
import FormLogin from "./form";
import "assets/styles/login.less";

const LoginComponent : React.FC = () => {

    const [authenticated] = useContext(SessionContext);

    return (authenticated)
        ? <Redirect to={"/kelola/dashboard"} />
        : (
            <section className={"login-layout"}>
                <div className={"pattern"} />
                <div className={"login-container"}>
                    <FormLogin />
                </div>
            </section>
        )
}

export default LoginComponent;