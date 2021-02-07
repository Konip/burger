import React, { useState } from 'react'
import BurgerBlock from './BurgerBlock'
import Categories from './Categories'
import "./Menu.scss"
import db from "../../db.json"
import Basket from './Basket'

export default function Menu() {

    const [activeItem, setActiveItem] = useState("Бургеры стандартные")
    const [totalPrice, setTotalPrice] = useState(0)
    const [count, setCount] = useState(0)

    const c = (a, b) => {
        setTotalPrice(a)
        setCount(b)
    }
    const addItem = (i) => {
        let a = totalPrice
        let b = count

        a += i;
        b++;

        setTotalPrice(a)
        setCount(b)
    }
    const deleteItem = (i) => {
        if (count > 0) {
            let a = totalPrice
            let b = count

            a -= i;
            b--;

            setTotalPrice(a)
            setCount(b)
        }
    }
    return (
        <div className="menu">
            <Basket totalPrice={totalPrice} count={count} />
            <div className="categories">
                {
                    <Categories item={Object.keys(db)} onClickItem={i => { setActiveItem(i) }} />
                }
            </div>

            <div className="content">
                {
                    db[activeItem].map((el, index) => (

                        <BurgerBlock key={index} name={el.name}
                            description={el.description} price={el.price} img={el.img}
                            onClickAdd={i => { addItem(i) }} onClickDel={i => { deleteItem(i) }}
                            count={count} c={c}/>
                    ))
                }
            </div>
        </div>
    )
}
