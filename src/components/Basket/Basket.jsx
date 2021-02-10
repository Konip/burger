import React from 'react'
import { useSelector } from 'react-redux'

export default function Basket() {

    const {items,totalPrice} = useSelector(({basket}) => basket)

    const arr = [].concat.apply([],Object.values(items))

    return (
        <div className="basket">
            <h1>Корзина</h1>
            <h2>Сумма заказа {totalPrice}</h2>
            <h2>Всего {arr.length}</h2>
            <span>{console.log(arr)}</span>
        </div>
    )
}
