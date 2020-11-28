import React, {useEffect, useState} from 'react';
import './App.css';
import Start from './companents/Start/Start';
import Author from "./companents/Author/Author";
import {Redirect, Route, Switch} from "react-router-dom";
import AuthContainer from "./companents/Auth/AuthContainer";


import axios from "axios";

export function PersonList () {
    const [proposals, setProposals] = useState([])


    useEffect(() => {
        axios.get('https://rosseti-final-back.herokuapp.com/proposals',
            {headers: {"Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMTI4ODgzLCJqdGkiOiI5ZDE0MGViYTY4N2M0NTRhODI4YjAxZWVjZjhhMTUwYyIsInVzZXJfaWQiOjN9.cpjPa6B9CN_GW0HMmOVXfmCcNgFH8EF7knuH-VGEvwQ`}})
            .then(res => {
                setProposals(res.data);
            })
    }, [])


    return (
        <ul>
            {proposals.map(proposal => <li>{proposal.status}</li>)}
        </ul>
    )

}

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
                       render={() => <Author/>}/>
                <Redirect from='/' to='/start'/>

            </Switch>


        </div>

    );
}

export default App;
