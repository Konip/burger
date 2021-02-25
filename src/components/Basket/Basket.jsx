import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BurgerBlockBasket from './BurgerBlockBasket';
import clearAC from "../../redux/basket"
import { deleteGroupBurgerAC } from "../../redux/basket"
import { addBurgerAC, deleteOneBurgerAC } from "../../redux/basket"
import "./Basket.scss"
import { NavLink } from 'react-router-dom';


export default function Basket() {
    const dispatch = useDispatch()
    const { items, totalPrice, totalCount } = useSelector(({ basket }) => basket)

    const arr = [].concat.apply([], Object.values(items));

    let arrEntry = []
    let oldArrEntry = []
    let totalArr = []
    arr.map(a => {

        if (arrEntry.length == 0) arrEntry.unshift(a.name)

        if (!arrEntry.includes(a.name)) arrEntry.unshift(a.name)

    })

    for (let index = 0; index < arrEntry.length; index++) {
        let name = null
        let count = null
        let totalPrice = null
        let img = null
        let activeItem = null
        let price = null

        arr.map(a => {
            if (a.name === arrEntry[index]) {
                name = a.name
                img = a.img
                totalPrice += a.price
                count++
                activeItem = a.activeItem
                price = a.price
            }
        })

        totalArr.unshift({
            name: name,
            totalPrice: totalPrice,
            count: count,
            img: img,
            activeItem: activeItem,
            price: price,
        })
    }
    console.log(totalArr)
    return (
        <div className="basket">
            {totalArr.length != 0
                ?
                <div className="wrap">
                    {
                        totalArr.map(t => (
                            <BurgerBlockBasket key={`${t.img}${t.price}`} name={t.name} totalPrice={t.totalPrice}
                                count={t.count} img={t.img} id={t.id} price={t.price}
                                activeItem={t.activeItem} onClickDelGroup={i => dispatch(deleteGroupBurgerAC(i))}
                                onClickAdd={item => dispatch(addBurgerAC(item))} activeItem={t.activeItem}
                                onClickDelOne={item => dispatch(deleteOneBurgerAC(item))} />
                        ))
                    }

                    <div className="total-price">
                        <span>Общее количество {`${totalCount} шт.`} </span>
                        <span>Сумма заказа {`${totalPrice} ₽`}</span>
                    </div>

                    <div className="nav-buttons">
                        <div className="back">
                            <NavLink to="/menu">
                                Вернуться назад
                    </NavLink>
                        </div>
                        <div className="buy">
                            <NavLink to="/">
                                Оплатить сейчас
                    </NavLink>
                        </div>
                    </div>
                </div>
                :
                <div className="wrap">
                    <h1>В вашей корзине пока ничего нет</h1>
                    <div className="nav-buttons">
                        <div className="back">
                            <NavLink to="/menu">
                                Вернуться назад
                    </NavLink>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
