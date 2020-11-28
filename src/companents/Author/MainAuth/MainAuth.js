import React from 'react';
import style from "./MainAuth.module.css"


const MainAuth = (props) => {
    let newHolderElement = React.createRef();
    let newHolderElement1 = React.createRef();
    let onHolderChange = () => {
        let text = newHolderElement.current.value;
        props.updateNewHolder(text)
    }
    let onHolderChange1 = () => {
        let text = newHolderElement1.current.value;
        props.updateNewHolder1(text)
    }
    return (
        <div className={style.main}>
            <h2>Подача заявления</h2>
            <h3>Здесь вы можете подать заявление. Введите свои пожелания в свободной форме.
                Для удобства можете использовать голосовой ввод на клавиатуре вашего смартфона.</h3>
            <textarea
                placeholder="Описание идеи"
                ref={newHolderElement}
                value={props.newHolderText}
                onChange={onHolderChange}
                className={style.textarea1}
            />
            <h3>Укажите желаемый способ связи с вами</h3>
            <textarea
                placeholder="Способ связи"
                ref={newHolderElement1}
                value={props.newHolderText1}
                onChange={onHolderChange1}
                className={style.textarea2}
            />
            <div className={style.but}>
            <button>Отправить заявление</button>
            </div>
        </div>


    )
}
export default MainAuth