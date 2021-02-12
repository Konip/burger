import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BurgerBlockBasket from './BurgerBlockBasket';
import clearAC from "../../redux/basket"
import { deleteGroupBurgerAC } from "../../redux/basket"


export default function Basket() {
    const dispatch = useDispatch()
    const { items, totalPrice,totalCount } = useSelector(({ basket }) => basket)

    const arr = [].concat.apply([], Object.values(items));
    // const totalPrice = totalBurger.reduce((sum, obj) => obj.price + sum, 0)

    let arrEntry = []
    let totalArr = []
    // создаем массив уникальных имен
    arr.map(a => {
        if (arrEntry.length == 0) arrEntry.push(a.name)

        if (!arrEntry.includes(a.name)) arrEntry.push(a.name)
    })
    // console.log(arrEntry)
    for (let index = 0; index < arrEntry.length; index++) {

        let name = null
        let count = null
        let totalPrice = null
        let img = null
        let activeItem = null

        arr.map(a => {
            if (a.name === arrEntry[index]) {
                name = a.name
                img = a.img
                totalPrice += a.price
                count++
                activeItem = a.activeItem
            }
        })

        totalArr.push({
            name: name,
            price: totalPrice,
            count: count,
            img: img,
            activeItem: activeItem
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
                    <BurgerBlockBasket name={t.name} price={t.price} count={t.count} img={t.img}
                    activeItem={t.activeItem} onClickDel={i => dispatch(deleteGroupBurgerAC(i))} />
                ))
            }
            <div className="basket__total-price">
                <h2>Сумма заказа {totalPrice}</h2>
                <h2>Общее количество {totalCount}</h2>
                <button onClick={() =>a()}>Очистить корзину</button>
            </div>
        </div>
    )
}
