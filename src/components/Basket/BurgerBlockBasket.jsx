import React from 'react'
import "./BurgerBlockBasket.scss"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import cross from "../../assets/cross.svg"


export default function BurgerBlockBasket({ name, totalPrice, count, img, onClickDelGroup, activeItem,
    onClickDelOne, onClickAdd, id, price }) {

    return (
        <div className="string">
            <div className="basket-block">

                <div className="wrapper">
                    <div className="wrapper-img" style={{ backgroundImage: `url(${img})` }}></div>
                    <div className="title">
                        {name}
                    </div>
                </div>
                <div className="wrapper-info">
                    <div className="basket-buttons">

                        <button onClick={() => onClickDelOne({ name, activeItem, price })}>
                            <img className="svg" src={minus} alt="" /></button>

                        <div className="info-price">
                            <p>{count}</p>
                        </div>

                        <button onClick={() => onClickAdd({ name, price, img, activeItem, id })}>
                            <img className="svg" src={plus} alt="" />
                        </button>
                    </div>

                    <p className="totalPrice">{`${totalPrice} ₽`}</p>


                    <button className="del-buttons" onClick={() => onClickDelGroup({ activeItem, name })}>
                        <img className="svg" src={cross} alt="" />
                    </button>

                </div>

            </div>
        </div>

    )
}
