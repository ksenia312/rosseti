import React from 'react';
import style from "./OneApplication.module.css"


const OneApplication = (props) => {

    return (
        <div className={style.applications}>
           Заявка {props.id}  {props.text}

        </div>


    )
}
export default OneApplication