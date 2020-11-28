import React from 'react';
import style from "./Author.module.css"
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import {Redirect, Route, Switch} from "react-router-dom";
import MainAuthContainer from "./MainAuth/MainAuthContainer";
import Applications from "./Applications/Application";

import StartPage from "./startPage/startPage";

const Author = (props) => {

    return (
        <div className={style.author}>
            <HeaderAuth/>
            <Switch>
                <Route path='/author/myapplication'
                       render={() => <MainAuthContainer/>}
                />
                <Route path='/author/applications'
                       render={() => <Applications/>}/>
                <Route path='/author/authorstart'
                       render={() => <StartPage/>}/>
                <Redirect from='/author/' to='/author/authorstart'/>
            </Switch>
        </div>


    )
}
export default Author