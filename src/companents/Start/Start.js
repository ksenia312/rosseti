import React from 'react';
import style from "./Start.module.css";

import {NavLink} from "react-router-dom";


const Start = (props) => {


    return (
        <div className={style.start}>
            <div className={style.head}>
                <NavLink to='/auth' activeClassName={style.active}>
                    <button>
                        Авторизоваться
                    </button>
                </NavLink>
            </div>
            <div className={style.main}>
                <h2> Добро пожаловать на сайт Россети! </h2>
            </div>
        </div>

    )
}
export default Start