import React from 'react'
import "./Categories.scss"

export default function Categories({ item, onClickItem, activeItem }) {
    return (
        <ul className="categories__item">
            {item &&
                item.map((i, index) => (
                    <li className={i === activeItem ? `categories__item-link active` : `categories__item-link`}
                        key={index} onClick={onClickItem ? () => onClickItem(i) : null}>
                        <span>{i}</span>
                    </li>
                ))
            }
        </ul>
    )
}
