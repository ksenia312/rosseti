import React from 'react';
import style from "./Author.module.css"
import NavAuth from "./NavAuth/NavAuth";
import {Redirect, Route, Switch} from "react-router-dom";
import MainAuthContainer from "./MainAuth/MainAuthContainer";
import ApplicationContainer from "./Applications/ApplicationContainer";

import Bank from "./bank/Bank";
import StartPageContainer from "./startPage/StartPageContainer";


const Author = (props) => {

    return (
        <div className={style.author}>
            <NavAuth/>
            <Switch>
                <Route path='/author/myapplication'
                       render={() => <MainAuthContainer/>}
                />
                <Route path='/author/applications'
                       render={() => <ApplicationContainer/>}/>
                <Route path='/author/authorstart'
                       render={() => <StartPageContainer/>}/>
                <Route path='/author/bank'
                       render={() => <Bank/>}/>
                <Redirect from='/author/' to='/author/authorstart'/>
            </Switch>
        </div>


    )
}
export default Author