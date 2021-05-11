import React, { useState } from 'react'
import BurgerBlock from './BurgerBlock'
import Categories from './Categories'
import "./Menu.scss"
import db from "../../db.json"
import Sum from './Sum'
import { useDispatch, useSelector } from 'react-redux';
import { addBurgerAC, deleteOneBurgerAC, toggleAC, incrementAC, priceAC } from "../../redux/basket"
import { NavLink } from 'react-router-dom'

let incre = false
let key1
let lastBurgerPrice = 0
let lastBurgerName = ''

export default function Menu() {

    const [activeItem, setActiveItem] = useState("Бургеры стандартные")

    const dispatch = useDispatch()
    const { totalPrice, totalCount, totalInfo, totalEntry, toggle, price } = useSelector(({ basket }) => basket)

    let groupPrice
    let start = 0
    let end = 0

    function group(name) {
        groupPrice = 0
        if (totalEntry.includes(name)) {
            console.log(totalEntry.includes(name));
            groupPrice = totalInfo[totalEntry.indexOf(name)].totalPrice
            if (incre) {
                return (
                    start = groupPrice - price,
                    end = groupPrice
                )
            }
            else if (!incre) {
                return (
                    start = groupPrice + price,
                    end = groupPrice
                )
            }
            // else { return 0 }
        }
        else if (lastBurgerPrice === price && lastBurgerName === name) {
            return (
                start = price,
                end = 0
            )
        }
        else { return 0 }
    }

    function LastPrice(item, event) {
                key1 = item.name
        if (event === 'add') {
            dispatch(addBurgerAC(item))
            dispatch(incrementAC(true))
            incre = true
        }
        else if (event === 'del') {
            dispatch(deleteOneBurgerAC(item))
            dispatch(incrementAC(false))
            incre = false
            lastBurgerPrice = item.groupPrice
            lastBurgerName = item.name
        }
        dispatch(toggleAC(true))
        dispatch(priceAC(item.price))
    }

    function addToggle(i) {
        dispatch(toggleAC(false))
        if (i) {
            setActiveItem(i)
        }
    }

    return (

        <div className="menu">
            <div className="categories">
                {
                    <Categories item={Object.keys(db)} onClickItem={i => addToggle(i)}
                        activeItem={activeItem}
                    />
                }
                <NavLink className='sum-nav' to="/basket" onClick={() => addToggle()}>
                    <Sum totalPrice={totalPrice} totalCount={totalCount} toggle={toggle} incre={incre} price={price} />
                </NavLink>
            </div>

            <div className="content">
                {
                    db[activeItem].map(el => (
                        <BurgerBlock key={`${el.img}${el.price}`} name={el.name} description={el.description}
                            price={el.price} img={el.img} id={el.id} activeItem={activeItem}
                            onClickAdd={item => LastPrice(item, 'add')}
                            onClickDel={item => LastPrice(item, 'del')}
                            count={totalEntry.includes(el.name) ? totalInfo[totalEntry.indexOf(el.name)].count : 0}
                            groupPrice={group(el.name)} key1={key1}
                            // groupPrice={ totalEntry.includes(el.name) ? totalInfo[totalEntry.indexOf(el.name)].totalPrice : 0}
                            toggle={toggle} start={start} end={end}
                        />
                    ))
                }
            </div>

            <NavLink className='sum-bottom' to="/basket">
                <Sum totalPrice={totalPrice} totalCount={totalCount} />
            </NavLink>

            {/* <div className="bottom">
                <NavLink className='sum-bottom' to="/basket">
                    <Sum totalPrice={totalPrice} totalCount={totalCount} />
                </NavLink>
            </div> */}
        </div>
    )
}