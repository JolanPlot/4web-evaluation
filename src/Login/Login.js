import React from "react";
import "./Login.css";

const Login = ({
    email,
    setEmail,
    password,
    setPassword,
    formHandler,
    hideErrorMessage
}) => (
        <>
            <div className="login">
                <form className="login" onSubmit={formHandler}>
                    <label htmlFor="email">Login</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="login_email"
                        placeholder="Email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        className="login_password"
                        placeholder="Password"
                    />
                    <h3 className="login_error " style={hideErrorMessage}>
                        Les identifiants que vous avez saisis sont incorrects.
          </h3>
                    <button className="login_button">Login</button>
                </form>
            </div>
        </>
    );

export default Login;