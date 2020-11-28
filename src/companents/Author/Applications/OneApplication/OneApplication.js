import React from 'react';
import style from "./OneApplication.module.css"


const OneApplication = (props) => {

    return (
        <div className={style.applications}>
            <div>
                <h2>Заявление {props.id}</h2>
                <ul>
                    <li>
                        <h3>Автор: </h3>
                        <p>{props.author}</p>
                    </li>
                    <li>
                        <h3>Статус заявления: </h3>
                        <p>{props.status}</p>
                    </li>
                    <li>
                        <h3>Категория: </h3>
                        <p>{props.category}</p>
                    </li>
                    <li>
                        <h3>Отправленное вами предложение: </h3>
                        <p>{props.draft}</p>
                    </li>
                    <li>
                        <h3>Наименование:  </h3>
                        <p>{props.title}</p>
                    </li>
                    <li>
                        <h3>Описание: </h3>
                        <p>{props.description}</p>
                    </li>
                    <li>
                        <h3>Ваш модератор: </h3>
                        <p>{props.moderator}</p>
                    </li>

                </ul>
            </div>

        </div>


    )
}
export default OneApplication