
const ADD_BURGER = "ADD_BURGER"

let initialState = {
    "Бургеры стандартные": [],
    "Бургеры фирменные": [],
    "Бургеры вегетарианские": [],
    "Роллы": [],
    "Закуски": [],
    "Шеф-набор": [],
    "Десерты": [],
    "Салаты": [],
}


const basket = (state = initialState, { type, data }) => {

    switch (type) {

        case ADD_BURGER:

            return {

                ...state,

                [data.activeItem]: !state[data.activeItem]
                    ? [data]
                    : [...state[data.activeItem], data]
            }

        default:
            return state
    }
}
export default basket
export const addBurgerAC = (data) => ({ type: ADD_BURGER, data })
