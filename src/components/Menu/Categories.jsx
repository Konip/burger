import React from 'react'
import "./Categories.scss"

export default function Categories({item}) {
    return (
        <div className="categories__item">
            {/* <div className="categories__item">Бургеры стандартные</div>
            <div className="categories__item">Бургеры фирменные</div>
            <div className="categories__item">Бургеры вегетарианские</div>
            <div className="categories__item">Роллы</div>
            <div className="categories__item">Закуски</div>
            <div className="categories__item">Шеф-набор</div>
            <div className="categories__item">Десерты</div>
            <div className="categories__item">Салаты</div> */}
            {item}
        </div>
    )
}
