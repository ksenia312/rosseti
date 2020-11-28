
import style from "./startPage.module.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
const StartPage = (props) => {
   const [data, setData] = useState({});
    useEffect(() => {
        axios.get('https://rosseti-final-back.herokuapp.com/proposals/latest-success',
            {headers: {"Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMTI4ODgzLCJqdGkiOiI5ZDE0MGViYTY4N2M0NTRhODI4YjAxZWVjZjhhMTUwYyIsInVzZXJfaWQiOjN9.cpjPa6B9CN_GW0HMmOVXfmCcNgFH8EF7knuH-VGEvwQ`}})
            .then((response) => setData(response.data))
    }, []);


debugger
    return (

        <div className={style.startPage}>
            <h2>Последняя успешно внедренная заявка.</h2>
            <div>
                <h3>Название:</h3> {data.title}
                <br/>
                <h3>Описание: </h3>{data.description}
            </div>
        </div>


    )
}
export default StartPage