import React from 'react'
import "./BurgerBlockBasket.scss"

export default function BurgerBlockBasket({ name, totalPrice, count, img, onClickDel, activeItem, 
    onClickDel1, onClickAdd, id, price }) {
        
    return (
        <div className="block">
            <div className="burger-block">
                <div className="burger-block__wrapper-img">
                    <div className="burger-block__img" style={{ backgroundImage: `url(${img})` }}></div>
                </div>

                <div className="burger-block__info">
                    <div className="burger-block__title">
                        {name}
                    </div>
                    <div className="burger-block__price">
                        <p>Цена {price}</p>
                        <p>Общая сумма {totalPrice}</p>
                        <p>количество {count}</p>
                    </div>
                </div>

                <button onClick={onClickDel ? () => onClickDel({ activeItem, name }) : null}>Удалить все бургеры</button>
                <button onClick={onClickDel1 ? () => onClickDel1({ name, activeItem, price }) : null}>Удалить</button>
                <button onClick={onClickAdd ? () => onClickAdd({ name, price, img, activeItem, id }) : null}>Добавить </button>
            </div>
        </div>
    )
}
