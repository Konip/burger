import React from 'react'
import "./Basket.scss"
import bakset from '../../assets/basket.svg'

export default function Basket({ totalPrice, totalCount }) {
    return (
        <div className="basket">

            <div>{totalPrice}</div>

            <div className="basket__img">
                <img src={bakset} alt="" />
            </div>

            <div>{totalCount}</div>
        </div>
    )
}
