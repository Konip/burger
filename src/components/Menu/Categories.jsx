import React from 'react'
import "./Categories.scss"
import { classNames } from 'classnames';

export default function Categories({ item, onClickItem, activeItem }) {
    return (
        <ul className="categories__item">
            {/* <ul className={classNames("categories__item", { active: activeItem })}> */}

            {item &&
                item.map((i, index) => (
                    
                    <li className="categories__item-link"
                    // <li className={classNames("categories__item-link", { active: activeItem === i })}
                        key={index} onClick={onClickItem ? () =>onClickItem(i) : null}>
                        <span>{i}</span>
                    </li>
                ))
            }
        </ul>
    )
}
