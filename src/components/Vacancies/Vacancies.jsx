import React from 'react'
import "./Vacancies.scss"

export default function Vacancies() {
    return (
        <div className="vacancies">
            <div className="1">
                <h1>Вакансии</h1>
            </div>
            <div className="vacancies-img">
                <img src="https://blackstarburger.ru/wp-content/uploads/2020/08/kishinev1.jpg" alt="" />
            </div>
            <div className="vacancies-text">
                <p>Мы постоянно находимся в поисках профессионалов, способных пополнить нашу команду.
                Работа в Black Star Burger – это работа в крупной прогрессивной компании в окружении
                единомышленников, ценящих личностный рост, престиж и успех.  Если ты именно такой –
                    будем рады видеть тебя! Просто найди свой город и позвони нам:</p>
            </div>
            <div className="vacancies-city">
                <div className="block">МОСКВА</div>
                <div className="block">КАЛИНИНГРАД</div>
            </div>
            <div className="contacts">
                <div className="contact">
                    <a className="tel" href="tel:+79031783967">+7 (903) 178-39-67</a>
                    <span>Ольга</span>
                </div>
                <div className="contact">
                <a className="tel" href="tel:+79602372020">+7 (960) 237-20-20</a>
                    <span>Вероника</span>
                </div>
            </div>
        </div>
    )
}
