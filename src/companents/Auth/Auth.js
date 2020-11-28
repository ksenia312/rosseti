import React from 'react';
import style from "./Auth.module.css"
import {NavLink} from "react-router-dom";

const Auth = (props) => {
    let newLoginElement = React.createRef();
    let newPasswordElement = React.createRef();
    let sendLogPas = () => {
        props.sendLogPas()
    }
    let onLoginChange = () => {
        let login = newLoginElement.current.value;
        props.updateLogin(login)
    }
    let onPasswordChange = () => {
        let password = newPasswordElement.current.value;
        props.updatePassword(password)
    }
    return (
        <div className={style.all}>
            <form className={style.form}>
                <h3>Логин</h3>
                <input
                    placeholder="Enter login"
                    ref={newLoginElement}
                    value={props.newLoginText}
                    onChange={onLoginChange}
                />
                <h3>Пароль</h3>
                <input
                    placeholder="Enter password"
                    type="password"
                    ref={newPasswordElement}
                    value={props.newPasswordText}
                    onChange={onPasswordChange}
                />
                <div>
                    <NavLink to='/author/' activeClassName={style.active}>
                        <button onClick={sendLogPas}
                        >Send
                        </button>
                    </NavLink>
                </div>
            </form>
        </div>
    )
}
export default Auth