import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BurgerBlockBasket from './BurgerBlockBasket';
import { deleteGroupBurgerAC } from "../../redux/basket"
import { addBurgerAC, deleteOneBurgerAC, toggleAC, priceAC, incrementAC } from "../../redux/basket"
import "./Basket.scss"
import { Link } from 'react-router-dom';
import CountUp from 'react-countup'
import left from '../../assets/chevron-left.svg'
import right from '../../assets/chevron-right.svg'

let key1

export default function Basket() {
    const dispatch = useDispatch()
    const { totalPrice, totalCount, totalInfo, toggle, price, incre } = useSelector(({ basket }) => basket)

    let start = 0
    let end = 0

    function group(total) {
        if (incre) {
            return (
                start = total - price,
                end = total
            )
        }
        else if (!incre) {
            return (
                start = total + price,
                end = total
            )
        }
    }

    function LastPrice(item, event) {
        key1 = item.name
        if (event === 'add') {
            dispatch(addBurgerAC(item))
            dispatch(incrementAC(true))

        }
        else if (event === 'del') {
            dispatch(deleteOneBurgerAC(item))
            dispatch(incrementAC(false))

        }
        dispatch(toggleAC(true))
        dispatch(priceAC(item.price))
    }
    return (
        <div className="basket">
            {totalInfo.length !== 0
                ?
                <div className="wrap">
                    <div className="list">
                        {
                            totalInfo.map(t => (
                                <BurgerBlockBasket key={`${t.img}${t.price}`} name={t.name} totalPrice={group(t.totalPrice)}
                                    count={t.count} img={t.img} id={t.id} price={t.price}
                                    activeItem={t.activeItem} onClickDelGroup={i => dispatch(deleteGroupBurgerAC(i))}
                                    onClickAdd={item => LastPrice(item, 'add')} activeItem={t.activeItem}
                                    onClickDelOne={item => LastPrice(item, 'del')}
                                    toggle={toggle} incre={incre} key1={key1} start={start} end={end}
                                />
                            ))
                        }
                    </div>

                    <div className="total-price">
                        <span>Общее количество : {`${totalCount} шт.`} </span>
                        {totalPrice
                            ?
                            incre
                                ?
                                <span>Сумма заказа :  <CountUp start={toggle ? totalPrice - price : totalPrice} end={totalPrice} duration={1} suffix=" ₽" /></span>
                                :
                                <span>Сумма заказа :   <CountUp start={toggle ? totalPrice + price : totalPrice} end={totalPrice} duration={1} suffix=" ₽" /></span>
                            :
                            <span>Сумма заказа : {`${totalPrice} ₽`}</span>
                        }
                    </div>

                    <div className="nav-buttons" onClick={() => dispatch(toggleAC(false))}>
                        <div className="back">
                            <Link to="/menu">
                                <img src={left} alt="" />
                                <p>Вернуться назад</p>
                                </Link>
                        </div>
                        <div className="buy">
                            <Link to="/">
                                <p>Оплатить сейчас</p>
                                <img src={right} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                :
                <div className="wrap">
                    <h1>В вашей корзине пока ничего нет</h1>
                    <div className="nav-buttons one">
                        <div className="back">
                            <Link to="/menu">
                                <img src={left} alt="" />
                                <p>Вернуться назад</p>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}