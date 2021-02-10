import React, { useState } from 'react'
import "./BurgerBlock.scss"
// import plus from "../../assets/plus.svg"
import plus from "../../assets/plus.svg"

export default function BurgerBlock({ name, description, price, img, id, activeItem, onClickAdd, 
    onClickDel, addedCound }) {


    return (
        <div className="block">

            <div className="burger-block">
                <div className="burger-block__wrapper-img">
                    <div className="burger-block__img" style={{ backgroundImage: `url(${img})` }}></div>
                </div>

                <div className="burger-block__info">
                    <div className="burger-block__title">
                        <p>{name}</p>
                    </div>
                    <div className="burger-block__price">
                        <p>{price}</p>
                    </div>
                </div>

                <div className="burger-block__mask">
                    <p>{description}</p>
                </div>
            </div>

            {/* <div className="buttons">

                <button onClick={() => onClickDel(price)} >Удалить</button>
                <button onClick={() => onClickAdd(price)}>
                    <img className="svg" src={plus} alt="" />
                    Добавить
                    {count}
                </button>
            </div> */}
            <div className="buttons">

                {/* <button onClick={() => onClickDel(price)} >Удалить</button> */}
                <button onClick={onClickDel ? () => onClickDel({ name, activeItem }) : null}>Удалить</button>
                <button onClick={onClickAdd ? () => onClickAdd({ name, price, img, activeItem, id }) : null}>
                    {addedCound}
                    <img className="svg" src={plus} alt="" />
                    Добавить
                </button>
            </div>
        </div>

    )
}
