import React, { useState } from 'react'
import BurgerBlock from './BurgerBlock'
import Categories from './Categories'
import "./Menu.scss"
import db from "../../db.json"
import Sum from './Sum'
import { useDispatch, useSelector } from 'react-redux';
import { addBurgerAC, deleteOneBurgerAC } from "../../redux/basket"
import { NavLink } from 'react-router-dom'


export default function Menu() {

    const [activeItem, setActiveItem] = useState("Бургеры стандартные")

    const dispatch = useDispatch()
    const { totalPrice, totalCount, totalInfo, totalEntry } = useSelector(({ basket }) => basket)

    return (
        <div className="menu">
            {/* <div>
                <NavLink to="/basket">
                    <Sum totalPrice={totalPrice} totalCount={totalCount} />
                </NavLink>
            </div> */}

            <div className="categories">
                {
                    <Categories item={Object.keys(db)} onClickItem={i => { setActiveItem(i) }}
                        activeItem={activeItem}
                    />
                }
                <NavLink to="/basket">
                    <Sum totalPrice={totalPrice} totalCount={totalCount} />
                </NavLink>
            </div>

            <div className="content">
                {
                    db[activeItem].map(el => (
                        <BurgerBlock key={`${el.img}${el.price}`} name={el.name} description={el.description}
                            price={el.price} img={el.img} id={el.id}
                            onClickAdd={item => dispatch(addBurgerAC(item))} activeItem={activeItem}
                            onClickDel={item => dispatch(deleteOneBurgerAC(item))}
                            count={totalEntry.includes(el.name) ? totalInfo[totalEntry.indexOf(el.name)].count : 0}
                            groupPrice={totalEntry.includes(el.name) ? totalInfo[totalEntry.indexOf(el.name)].totalPrice : 0}
                        />
                    ))
                }
            </div>
        </div>
    )
}