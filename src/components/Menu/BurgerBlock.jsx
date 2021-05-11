import React from 'react'
import "./BurgerBlock.scss"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import CountUp from 'react-countup'

export default function BurgerBlock({ name, description, price, img, id,
    activeItem, onClickAdd, onClickDel, count, groupPrice, toggle, start, end, key1 }) {
    
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
                        <p>{`${price} ₽`}</p>
                    </div>
                </div>

                <div className="burger-block__mask">
                    <p>{description}</p>
                </div>
            </div>
            <div className="buttons">
                <button onClick={groupPrice !== 0 ? () => onClickDel({ name, activeItem, price, groupPrice }) : null}>
                    <img className="svg" src={minus} alt="" />
                    <span>Удалить</span>
                </button>

                <span className="groupPrice">
                    {toggle && name === key1
                        ?
                        <CountUp start={start} end={end} duration={1} suffix=" ₽" />
                        :
                        `${groupPrice} ₽`
                    }
                </span>
                <button onClick={() => onClickAdd({ name, price, img, activeItem, id })}>
                    <img className="svg" src={plus} alt="" />
                    <span>Добавить</span>
                    {count}
                </button>
            </div>
        </div>
    )
}