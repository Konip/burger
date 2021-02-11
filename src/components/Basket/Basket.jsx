import React from 'react'
import { useSelector } from 'react-redux'
import BurgerBlockBasket from './BurgerBlockBasket';



export default function Basket() {

    const { items, totalPrice } = useSelector(({ basket }) => basket)

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

        arr.map(a => {
            if (a.name === arrEntry[index]) {
                name = a.name
                img = a.img
                totalPrice += a.price
                count++
            }
        })

        totalArr.push({
            name: name,
            price: totalPrice,
            count: count,
            img: img,
        })
    }
    console.log(totalArr)

    return (
        <div className="basket">
            {
                totalArr.map(t => (
                    <BurgerBlockBasket name={t.name} price={t.price} count={t.count} img={t.img} />
                ))
            }
            <div className="basket__total-price">
                <h2>Сумма заказа {totalPrice}</h2>
            </div>
        </div>
    )
}
