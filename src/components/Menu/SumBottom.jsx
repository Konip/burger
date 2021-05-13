import React from 'react'
import "./Sum.scss"
import bakset from '../../assets/basket.svg'

export default function Sum({ totalCount }) {
    
    return (
        <div className="sum">
            <div className="sum__img">
                <img src={bakset} alt="" />
            </div>

            <div style={{width:'18px'}}>{totalCount}</div>
        </div>
    )
}
