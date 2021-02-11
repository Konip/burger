import React from 'react'
import "./BurgerBlockBasket.scss"

export default function BurgerBlockBasket({ name, price, count, img }) {
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
                        <p>{price}</p>
                        <p>{count}</p>
                    </div>
                </div>

                <div className="burger-block__mask">
                    <p>{count}</p>
                </div>
            </div>
        </div>
    )
}
