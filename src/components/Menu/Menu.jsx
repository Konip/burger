import React, { useState } from 'react'
import BurgerBlock from './BurgerBlock'
import Categories from './Categories'
import Basket from './Basket'
import "./Menu.scss"

import db from "../../db.json"


export default function Menu() {

    const [activeItem, setActiveItem] = useState("Бургеры стандартные")

    return (
        <div className="menu">
            {/* <Basket /> */}
            <div className="categories">
                {
                    <Categories item={Object.keys(db)} onClickItem={i => { setActiveItem(i) }} />
                }
            </div>

            <div className="content">
                {
                    db[activeItem].map((el, index) => (

                        <BurgerBlock key={index} name={el.name}
                            description={el.description} cost={el.cost} img={el.img} />
                    ))
                }
            </div>
        </div>
    )
}
