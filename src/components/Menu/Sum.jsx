import React from 'react'
import "./Sum.scss"
import bakset from '../../assets/basket.svg'
import CountUp from 'react-countup'

export default function Sum({ totalPrice, totalCount, price, toggle, incre }) {
    // console.log(totalPrice);
    return (
        <div className="sum">

            {totalPrice
                ?
                incre
                    ?
                    <CountUp start={toggle ? totalPrice - price : totalPrice} end={totalPrice} duration={1} suffix=" ₽" />
                    :
                    <CountUp start={toggle ? totalPrice + price : totalPrice} end={totalPrice} duration={1} suffix=" ₽" />
                :
                `${totalPrice} ₽`
            }

            <div className="sum__img">
                <img src={bakset} alt="" />
            </div>

            <div>{totalCount}</div>
        </div>
    )
}
