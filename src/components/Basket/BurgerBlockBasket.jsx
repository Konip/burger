import React from 'react'
import "./BurgerBlockBasket.scss"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import cross from "../../assets/cross.svg"

export default function BurgerBlockBasket({ name, totalPrice, count, img, onClickDel, activeItem,
    onClickDel1, onClickAdd, id, price }) {

    return (
        <div className="block-basket">
            <div className="block">
                <div className="wrapper">
                    <div className="wrapper-img" style={{ backgroundImage: `url(${img})` }}></div>
                    <div className="title">
                        {name}
                    </div>
                </div>

                <div className="buttons">

                    <button onClick={onClickDel1 ? () => onClickDel1({ name, activeItem, price }) : null}>
                        <img className="svg" src={minus} alt="" /></button>

                    <div className="info-price">
                        {count}
                    </div>

                    <button onClick={onClickAdd ? () => onClickAdd({ name, price, img, activeItem, id }) : null}>
                        <img className="svg" src={plus} alt="" />
                    </button>
                </div>
                <p>{`${totalPrice} ₽`}</p>

                <div className="del buttons">
                    <button onClick={onClickDel ? () => onClickDel({ activeItem, name }) : null}>
                        <img src={cross} alt="" /></button>
                </div>

            </div>
        </div>
    )
}
