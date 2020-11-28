import React from 'react';
import './App.css';
import Start from './companents/Start/Start';
import Author from "./companents/Author/Author";
import {Redirect, Route, Switch} from "react-router-dom";
import AuthContainer from "./companents/Auth/AuthContainer";
import PersonList from "./proposals";



const App = (props) => {
    return (
        <div className='app-wripper'>
            <Switch>
                <Route path="/test"
                       render={() => <PersonList/>}
                />
                <Route path="/start"
                       render={() => <Start/>}
                />

                <Route path="/auth"
                       render={() => <AuthContainer/>}
                />
                <Route path='/author/'
                       render={() =>  <Author/>}/>
                <Redirect from='/' to='/start'/>

            </Switch>

        </div>

    );
}

export default App;
