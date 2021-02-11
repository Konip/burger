import React from 'react'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

const i = {
    "Бургеры стандартные": [
        {
            name: "Фишбургер",
            price: 169,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/06/novyj-sajt-fishburger-standart-1.png",
            activeItem: "Бургеры стандартные",
            id: 1
        },
        {
            name: "Фишбургер",
            price: 169,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/06/novyj-sajt-fishburger-standart-1.png",
            activeItem: "Бургеры стандартные",
            id: 1
        },
        {
            name: "Фишбургер",
            price: 169,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/06/novyj-sajt-fishburger-standart-1.png",
            activeItem: "Бургеры стандартные",
            id: 1
        },
        {
            name: "Фишбургер",
            price: 169,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/06/novyj-sajt-fishburger-standart-1.png",
            activeItem: "Бургеры стандартные",
            id: 1
        },
        {
            name: "Фишбургер",
            price: 169,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/06/novyj-sajt-fishburger-standart-1.png",
            activeItem: "Бургеры стандартные",
            id: 1
        },
        {
            name: "BUD бургер",
            price: 199,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/06/novyj-sajt-bud-burger.png",
            activeItem: "Бургеры стандартные",
            id: 2
        },
        {
            name: "Фишбургер",
            price: 169,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/06/novyj-sajt-fishburger-standart-1.png",
            activeItem: "Бургеры стандартные",
            id: 1
        }
    ],
    "Бургеры фирменные": [],
    "Бургеры вегетарианские": [
        {
            name: "Вегабургер с фалафелем",
            price: 329,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/05/vega-falafel.png",
            activeItem: "Бургеры вегетарианские",
            id: 2
        },
        {
            name: "Вегабургер с фалафелем",
            price: 329,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/05/vega-falafel.png",
            activeItem: "Бургеры вегетарианские",
            id: 2
        },
        {
            name: "Вегабургер с фалафелем",
            price: 329,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/05/vega-falafel.png",
            activeItem: "Бургеры вегетарианские",
            id: 2
        },
        {
            name: "Вегабургер с фалафелем",
            price: 329,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/05/vega-falafel.png",
            activeItem: "Бургеры вегетарианские",
            id: 2
        },
        {
            name: "Вегабургер с фалафелем",
            price: 329,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/05/vega-falafel.png",
            activeItem: "Бургеры вегетарианские",
            id: 2
        }
    ],
    Роллы: [],
    Закуски: [],
    "Шеф-набор": [],
    Десерты: [
        {
            name: "Донат Ягодный микс",
            price: 89,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/09/novyj-sajt-jagodnyj-donat.png",
            activeItem: "Десерты",
            id: 2
        },
        {
            name: "Донат Ягодный микс",
            price: 89,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/09/novyj-sajt-jagodnyj-donat.png",
            activeItem: "Десерты",
            id: 2
        },
        {
            name: "Донат Ягодный микс",
            price: 89,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/09/novyj-sajt-jagodnyj-donat.png",
            activeItem: "Десерты",
            id: 2
        },
        {
            name: "Донат Ягодный микс",
            price: 89,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/09/novyj-sajt-jagodnyj-donat.png",
            activeItem: "Десерты",
            id: 2
        },
        {
            name: "Донат Ягодный микс",
            price: 89,
            img:
                "https://blackstarburger.ru/wp-content/uploads/2020/09/novyj-sajt-jagodnyj-donat.png",
            activeItem: "Десерты",
            id: 2
        }
    ],
    Салаты: []
};
const arr = [].concat.apply([], Object.values(i));
// const totalPrice = totalBurger.reduce((sum, obj) => obj.price + sum, 0)
// console.log(arr.length)
// console.log(arr)

let arrEntry = []
let totalArr = []
// создаем массив уникальных имен
arr.map(a => {
    if (arrEntry.length == 0) arrEntry.push(a.name)

    if (!arrEntry.includes(a.name)) arrEntry.push(a.name)
})
console.log(arrEntry)

for (let index = 0; index < arrEntry.length; index++) {

let name = null
let count = null
let totalPrice = null
let img = null

    arr.map(a => {
        if(a.name === arrEntry[index]) {
            name = a.name
            img = a.img
            totalPrice +=a.price
            count ++
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