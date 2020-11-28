import React from 'react';
import style from "./MainAuth.module.css"


const MainAuth = (props) => {
    let newHolderElement = React.createRef();
    let onHolderChange = () => {
        let text = newHolderElement.current.value;
        props.updateNewHolder(text)
    }
    return (
        <div className={style.main}>
            <h4>Здесь вы можете подать заявление. Введите свои пожелания в свободной форме.</h4>
            <textarea
                placeholder="Вводите здесь"
                ref={newHolderElement}
                value={props.newHolderText}
                onChange={onHolderChange}
            />
            <div className={style.but}>
            <button>Отправить заявление</button>
            </div>
        </div>


    )
}
export default MainAuth