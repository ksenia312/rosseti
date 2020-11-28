import React, {useEffect, useState} from 'react';
import style from "./Bank.module.css"
import axios from "axios";


const Bank = (props) => {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get('https://rosseti-final-back.herokuapp.com/proposals/collection',
            {headers: {"Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMTI4ODgzLCJqdGkiOiI5ZDE0MGViYTY4N2M0NTRhODI4YjAxZWVjZjhhMTUwYyIsInVzZXJfaWQiOjN9.cpjPa6B9CN_GW0HMmOVXfmCcNgFH8EF7knuH-VGEvwQ`}})
            .then((response) => setData(response.data))
    }, []);

    return (
        <div className={style.bank}>
            <div>
                <h2>Реализованное предложение 1</h2>
                <ul>
                    <li>
                        <h3>Автор: </h3>
                        <p>{data && data[0].title}</p>
                    </li>
                    <li>
                        <h3>Описание:  </h3>
                        <p>{data && data[0].description}</p>
                    </li>
                    <li>
                        <h3>Категория: </h3>
                        <p>{data && data[0].category}</p>
                    </li>

                </ul>

            </div>
            <div>
                <h2>Реализованное предложение 2</h2>
                <ul>
                    <li>
                        <h3>Автор: </h3>
                        <p>{data && data[1].title}</p>
                    </li>
                    <li>
                        <h3>Описание: </h3>
                        <p>{data && data[1].description}</p>
                    </li>
                    <li>
                        <h3>Категория: </h3>
                        <p>{data && data[1].category}</p>
                    </li>

                </ul>

            </div>
        </div>


    )
}
export default Bank