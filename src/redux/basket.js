
const ADD_BURGER = "ADD_BURGER"

// let  initialState = {
//     "Бургеры стандартные": [
//         {
//             name: "Фишбургер",
//             img: "https://blackstarburger.ru/wp-content/uploads/2020/06/novyj-sajt-fishburger-standart-1.png",

//         }
//     ]
// }
let initialState = {

}


const basket = (state = initialState, { type, data }) => {
    switch (type) {
        case ADD_BURGER:
            return {
                // "Бургеры стандартные"[]
                //                   {  
                //         activeItem: "Бургеры стандартные"
                //     img: "https://blackstarburger.ru/wp-content/uploads/2020/05/gamburger.png"
                //     name: "Гамбургер"
                //     price: 77   
                // }


                ...state,
                state: {  //"Бургеры стандартные"
                    [data.activeItem]: !state[data.activeItem]
                        ? [data]
                        : [...state[data.activeItem], {data}]
                }
            }



        default:
            return state
    }
}
export default basket
export const addBurgerAC = (data) => ({ type: ADD_BURGER, data })
