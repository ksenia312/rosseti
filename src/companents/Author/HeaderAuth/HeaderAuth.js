import React from 'react';
import s from "./HeaderAuth.module.css";

import {NavLink} from "react-router-dom";
import style from "../../Start/Start.module.css";



const HeaderAuth = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/author/authorstart' activeClassName={style.active}>
                    Start
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/author/applications' activeClassName={style.active}>
                    Applications
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/author/myapplication' activeClassName={style.active}>
                     Filing an application
                </NavLink>
            </div>


        </nav>
    )
}
export default HeaderAuth