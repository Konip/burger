import React from 'react'
import "./BurgerBlock.scss"
import plus from "../../assets/plus.svg"

export default function BurgerBlock({ name, description, price, img, id,
    activeItem, onClickAdd, onClickDel, addedCound }) {

    return (
        <div className="block">

            <div className="burger-block">
                <div className="burger-block__wrapper-img">
                    <div className="burger-block__img" style={{ backgroundImage: `url(${img})` }}></div>
                </div>

                <div className="info">
                    <div className="info__title">
                        <p>{name}</p>
                    </div>
                    <div className="info__price">
                        <p>{price}</p>
                    </div>
                </div>

                <div className="burger-block__mask">
                    <p>{description}</p>
                </div>
            </div>
            <div className="buttons">

                <button onClick={onClickDel ? () => onClickDel({ name, activeItem, price }) : null}>Удалить</button>

                <button onClick={onClickAdd ? () => onClickAdd({ name, price, img, activeItem, id }) : null}>
                    <img className="svg" src={plus} alt="" />
                    <span>Добавить</span>
                    {addedCound}
                </button>
            </div>
        </div>

    )
}
