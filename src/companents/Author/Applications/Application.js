import React, {useEffect, useState} from 'react';
import style from "./Application.module.css"

import axios from "axios";
import OneApplication from "./OneApplication/OneApplication";


const Applications = (props) => {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get('https://rosseti-final-back.herokuapp.com/proposals',
            {headers: {"Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMTI4ODgzLCJqdGkiOiI5ZDE0MGViYTY4N2M0NTRhODI4YjAxZWVjZjhhMTUwYyIsInVzZXJfaWQiOjN9.cpjPa6B9CN_GW0HMmOVXfmCcNgFH8EF7knuH-VGEvwQ`}})
            .then((response) => {
                setData(response.data);
            })
    }, []);

    return (
        <div className={style.applications}>
            <OneApplication
                id='1'
                title={data && data[0].title}
                author={data && data[0].author}
                description={data && data[0].description}
                status={data && data[0].status}
                draft={data && data[0].draft}
                moderator={data && data[0].moderator}
                category={data && data[0].category}
            />
            <OneApplication
                id='2'
                title={data && data[1].title}
                author={data && data[1].author}
                description={data && data[1].description}
                status={data && data[1].status}
                draft={data && data[1].draft}
                moderator={data && data[1].moderator}
                category={data && data[1].category}
            />
        </div>


    )
}

export default Applications