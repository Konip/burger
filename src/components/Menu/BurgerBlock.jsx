import React from 'react'
import "./BurgerBlock.scss"

export default function BurgerBlock({ name, description, price, img }) {
    return (
        <div className="burger-block">
            <div className="burger-block__wrapper">
                <div className="burger-block__img" style={{ backgroundImage: `url(${img})` }}></div>
            </div>

            <div className="burger-block__info">
                <div className="burger-block__title">
                    <p>{name}</p>
                </div>
                <div className="burger-block__price">
                    <p>{`${price} руб`}</p>
                </div>
            </div>

            <div className="burger-block__mask">
            <p>{description}</p>
            </div>

        </div>
    )
}
