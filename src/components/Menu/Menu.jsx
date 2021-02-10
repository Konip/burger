import React, { useState } from 'react'
import BurgerBlock from './BurgerBlock'
import Categories from './Categories'
import "./Menu.scss"
import db from "../../db.json"
import Basket from './Basket'
import { useDispatch, useSelector } from 'react-redux';
import { addBurgerAC, delBurgerAC } from "../../redux/basket"

export default function Menu() {

    const [activeItem, setActiveItem] = useState("Бургеры стандартные")

    const dispatch = useDispatch()
    const totalCount = useSelector(({ basket }) => basket.totalCount)
    const burgerCount = useSelector(({ basket }) => basket.items)
    const burgerCountBlock = useSelector(({ basket }) => basket.items[activeItem])
    const totalPrice = useSelector(({ basket }) => basket.totalPrice)

    const seachCount = (burgerCountBlock, el) => {
        let entry = 0
        burgerCountBlock.map(i => {
            if (i.id === el.id) entry++
            
        })
        return entry
    }

    return (
        <div className="menu">
            <Basket totalPrice={totalPrice} totalCount={totalCount} />
            <div className="categories">
                {
                    <Categories item={Object.keys(db)} onClickItem={i => { setActiveItem(i) }}
                        activeItem={activeItem}
                    />
                }
            </div>

            <div className="content">
                {
                    db[activeItem].map((el, index) => (

                        <BurgerBlock key={el.img} name={el.name} description={el.description} price={el.price} img={el.img}
                            id={el.id}
                            onClickAdd={item => dispatch(addBurgerAC(item))} activeItem={activeItem}
                            onClickDel={item => dispatch(delBurgerAC(item))}
                            addedCound={burgerCountBlock && seachCount(burgerCountBlock, el)}
                        />
                    ))
                }
            </div>
        </div>
    )
}
