import React from "react"
import "./QuestPopUp.css"

export default function Question({popUpOpen, togglePopUp}) {
const classText = ["popUp"]
let [inputVal, setInputVal] = React.useState('')
let [textVal, setTextVal] = React.useState('')


let [validPop, setValidPop] = React.useState(false)
if(popUpOpen) {
    classText.push("popUp_active")
}
    /**
     * Валидация по строке inputa
     * @param {string} text текст валидации 
     */
    function validateQuestion () {
        setValidPop(
            validPop = !validPop
        )
    }

    function clear () {
        setInputVal('')
        setTextVal('')
    }

    /**
     * Отправка сообщения на сервер
     */
    function sendQuestion () {
        validateQuestion()
        if (validPop) {
            return console.log("Почта отправителя: " + inputVal + " Текст: " + textVal)
        }
    }

    return (
        <div className={classText.join(" ")}>
            <div className="popUp__card">
                <div className={!validPop ? "popUp__question" : "popUp__card_none"}>
                    <h4 className="popUp__head">Задать вопрос</h4>
                    <span className="popUp__label" name="email">
                        Эл.почта
                    </span>
                    <input className="popUp__input" type="email" name="email" placeholder="alexandrivanov@mail.ru" value={inputVal} onChange={event => setInputVal(event.target.value)}/>
                    <span name="text" className="popUp__label">
                        Вопрос
                    </span>
                    <textarea className="popUp__text" name="text" placeholder="Подскажите, пожалуйста..." value={textVal} onChange={event => setTextVal(event.target.value)}></textarea>
                    <button className="popUp__btn" onClick={() => sendQuestion()}>Отправить</button>
                </div>
                
                <div className={validPop ? "popUp__success" : "popUp__card_none"}>
                    <h4 className="popUp__head">Ваш запрос успешно отправлен</h4>
                </div>
                
                <div className="popUp__close" onClick={() => [togglePopUp(), setValidPop(), clear()]}>&times;</div>
            </div>
        </div>
    )
}