import React, { useState } from 'react'
import BurgerBlock from './BurgerBlock'
import Categories from './Categories'
import "./Menu.scss"
import db from "../../db.json"
import Basket from './Basket'
import { useDispatch } from 'react-redux';
import {addBurgerAC,delBurgerAC} from "../../redux/basket"
export default function Menu() {

const dispatch = useDispatch()

    const [activeItem, setActiveItem] = useState("Бургеры стандартные")
    const [totalPrice, setTotalPrice] = useState(0)
    const [count, setCount] = useState(0)
    // console.log(activeItem)
   

    return (
        <div className="menu">
            <Basket totalPrice={totalPrice} count={count} />
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

                        <BurgerBlock key={el.img} name={el.name} 
                            description={el.description} price={el.price} img={el.img}
                            onClickAdd={ item => dispatch(addBurgerAC(item))} activeItem={activeItem}
                            onClickDel = {item => dispatch(delBurgerAC(item))}
                             />
                    ))
                }
            </div>
        </div>
    )
}
