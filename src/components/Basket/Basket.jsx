import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BurgerBlockBasket from './BurgerBlockBasket';
import { deleteGroupBurgerAC } from "../../redux/basket"
import { addBurgerAC, deleteOneBurgerAC } from "../../redux/basket"
import "./Basket.scss"
import { NavLink } from 'react-router-dom';


export default function Basket() {
    const dispatch = useDispatch()
    const { totalPrice, totalCount, totalInfo } = useSelector(({ basket }) => basket)


    return (
        <div className="basket">
            {totalInfo.length !== 0
                ?
                <div className="wrap">
                    <div className="list">
                        {
                            totalInfo.map(t => (
                                <BurgerBlockBasket key={`${t.img}${t.price}`} name={t.name} totalPrice={t.totalPrice}
                                    count={t.count} img={t.img} id={t.id} price={t.price}
                                    activeItem={t.activeItem} onClickDelGroup={i => dispatch(deleteGroupBurgerAC(i))}
                                    onClickAdd={item => dispatch(addBurgerAC(item))} activeItem={t.activeItem}
                                    onClickDelOne={item => dispatch(deleteOneBurgerAC(item))} />
                            ))
                        }
                    </div>


                    <div className="total-price">
                        <span>Общее количество : {`${totalCount} шт.`} </span>
                        <span>Сумма заказа : {`${totalPrice} ₽`}</span>
                    </div>

                    <div className="nav-buttons">
                        <div className="back">
                            <NavLink to="/menu">Вернуться назад</NavLink>
                        </div>
                        <div className="buy">
                            <NavLink to="/">Оплатить сейчас</NavLink>
                        </div>
                    </div>
                </div>
                :
                <div className="wrap">
                    <h1>В вашей корзине пока ничего нет</h1>
                    <div className="nav-buttons">
                        <div className="back">
                            <NavLink to="/menu">Вернуться назад</NavLink>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
