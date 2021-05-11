import React from 'react'
import "./BurgerBlockBasket.scss"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import cross from "../../assets/cross.svg"
import CountUp from 'react-countup'

export default function BurgerBlockBasket({ name, totalPrice, count, img, onClickDelGroup, activeItem,
    onClickDelOne, onClickAdd, id, price, incre, toggle, key1, start, end }) {

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

                    <p className="totalPrice">
                        {toggle && name === key1
                            ?
                            <CountUp start={start} end={end} duration={1} suffix=" ₽" />
                            :
                            `${totalPrice} ₽`
                        }
                    </p>

                    <button className="del-buttons" onClick={() => onClickDelGroup({ activeItem, name })}>
                        <img className="svg" src={cross} alt="" />
                    </button>

                </div>

            </div>
        </div>
    )
}