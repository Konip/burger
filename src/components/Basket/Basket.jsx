import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BurgerBlockBasket from './BurgerBlockBasket';
import clearAC from "../../redux/basket"
import { deleteGroupBurgerAC } from "../../redux/basket"
import { addBurgerAC, deleteOneBurgerAC } from "../../redux/basket"


export default function Basket() {
    const dispatch = useDispatch()
    const { items, totalPrice, totalCount } = useSelector(({ basket }) => basket)

    const arr = [].concat.apply([], Object.values(items));

    let arrEntry = []
    let totalArr = []
    arr.map(a => {
        if (arrEntry.length == 0) arrEntry.push(a.name)

        if (!arrEntry.includes(a.name)) arrEntry.push(a.name)
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

        totalArr.push({
            name: name,
            totalPrice: totalPrice,
            count: count,
            img: img,
            activeItem: activeItem,
            price: price,
        })
    }
    console.log(totalArr)

    const a = () => {
        dispatch(clearAC())
    }

    return (
        <div className="basket">
            {
                totalArr.map(t => (
                    <BurgerBlockBasket name={t.name} totalPrice={t.totalPrice} count={t.count}
                        img={t.img} id={t.id} price={t.price}
                        activeItem={t.activeItem} onClickDel={i => dispatch(deleteGroupBurgerAC(i))}
                        onClickAdd={item => dispatch(addBurgerAC(item))} activeItem={t.activeItem}
                        onClickDel1={item => dispatch(deleteOneBurgerAC(item))} />
                ))
            }
            <div className="basket__total-price">
                <h2>Сумма заказа {totalPrice}</h2>
                <h2>Общее количество {totalCount}</h2>
            </div>
        </div>
    )
}
