import React from 'react'
import "./Categories.scss"

import bakset from '../../assets/basket.svg'

export default function Categories({ item, onClickItem }) {
    return (
        <ul className="categories__item">

            {item &&
                item.map((i, index) => (
                    <li className="categories__item-link" key={index} onClick={onClickItem ? () => onClickItem(i) : null}>
                        <span>{i}</span>
                    </li>
                ))
            }
            <div className="categories__basket">
            <img src={bakset} alt=""/>
            </div>
        </ul>
    )
}
