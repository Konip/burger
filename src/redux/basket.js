
const ADD_BURGER = "ADD_BURGER"
const DELETE_BURGER = "DELETE_BURGER"

let initialState = {
    items: {
        "Бургеры стандартные": [],
        "Бургеры фирменные": [],
        "Бургеры вегетарианские": [],
        "Роллы": [],
        "Закуски": [],
        "Шеф-набор": [],
        "Десерты": [],
        "Салаты": [],
    }
}

const basket = (state = initialState, { type, data }) => {

    switch (type) {
        case ADD_BURGER:
            const items = {
                ...state.items,
                    [data.activeItem]: !state.items[data.activeItem]
                    ? [data]
                    : [...state.items[data.activeItem], data]
            }

            const totalBurger = [].concat.apply([], Object.values(items))
            const totalPrice = totalBurger.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state,
                items:items,
                totalCount: totalBurger.length,
                totalPrice: totalPrice
            }

        case DELETE_BURGER:
            let newState = state[data.activeItem].map(index => {
                Object.values(index).filter(i => i !== data.name)
            })
            // console.log(state[data.activeItem])

            return {
                ...state,
                [data.activeItem]: newState
            }

        default:
            return state
    }
}
export default basket
export const addBurgerAC = (data) => ({ type: ADD_BURGER, data })
export const delBurgerAC = (data) => ({ type: DELETE_BURGER, data })



