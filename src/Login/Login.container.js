import React, { useState } from "react";
import "./Login.css";
import Login from "./Login";
import { useHistory } from "react-router-dom";

const EnhanceLogin = props => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [StyleLoginError, setStyleLoginError] = useState({
        visibility: "hidden"
    });
    const history = useHistory();

    const formHandler = e => {
        if (email === "contact@web.fr" && password === "azerty") {
            history.push("/data");
        } else {
            setStyleLoginError({
                visibility: "visible"
            });
        }
    };

    return (
        <Login
            {...props}
            email={email}
            setEmail={setEmail}
            pwd={pwd}
            setPwd={setPwd}
            formHandler={formHandler}
            StyleLoginError={StyleLoginError}
        />
    );
};

export default EnhanceLogin;