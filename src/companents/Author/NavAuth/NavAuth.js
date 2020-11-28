import React from 'react';
import s from "./NavAuth.module.css";

import {NavLink} from "react-router-dom";
import style from "../../Start/Start.module.css";


const NavAuth = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/author/authorstart' activeClassName={style.active}>
                    Начало
                </NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/author/myapplication' activeClassName={style.active}>
                    Подать заявление
                </NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/author/applications' activeClassName={style.active}>
                    Мои заявления
                </NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/author/bank' activeClassName={style.active}>
                   Банк реализованных предложений
                </NavLink>
            </div>

        </nav>
    )
}
export default NavAuth