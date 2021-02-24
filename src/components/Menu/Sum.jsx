import React from 'react'
import "./Sum.scss"
import bakset from '../../assets/basket.svg'

export default function Sum({ totalPrice, totalCount }) {
    return (
        <div className="sum">

            <div>{`${totalPrice} ₽`}</div>

            <div className="sum__img">
                <img src={bakset} alt="" />
            </div>

            <div>{totalCount}</div>
        </div>
    )
}
