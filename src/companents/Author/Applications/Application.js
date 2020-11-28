import React from 'react';
import style from "./Application.module.css"

import OneApplication from "./OneApplication/OneApplication";


const Applications = (props) => {
    debugger
    let applicationElements = props.application.map( application =>
        <OneApplication text={application.text} id={application.id}/>);
    return (
        <div className={style.applications}>
            {applicationElements}
        </div>


    )
}
export default Applications