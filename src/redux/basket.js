
const ADD_BURGER = "ADD_BURGER"
const DELETE_ONE_BURGER = "DELETE_BURGER"
const CLEAR = "CLEAR"
const DELETE_GROUP_BURGER = "DELETE_GROUP_BURGER"

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
    },
    totalCount: 0,
    totalPrice: 0,
}

const basket = (state = initialState, action) => {

    switch (action.type) {
        case ADD_BURGER:
            const items = {
                ...state.items,
                [action.data.activeItem]: !state.items[action.data.activeItem]
                    ? [action.data]
                    : [...state.items[action.data.activeItem], action.data]
            }

            const totalBurger = [].concat.apply([], Object.values(items))
            const totalPrice = totalBurger.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state,
                items: items,
                totalCount: totalBurger.length,
                totalPrice: totalPrice
            }

        case DELETE_ONE_BURGER:
            const newState = state[action.data.activeItem].map(index => {
                Object.values(index).filter(i => i !== action.data.name)
            })
            return {
                ...state,
                [action.data.activeItem]: newState
            }
        case CLEAR:
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0,
            }
        case DELETE_GROUP_BURGER:
            const newItems = {
                ...state.items
            }

            const arr = []
            let CopyTotalCount = state.totalCount
            let CopyTotalPrice = state.totalPrice

            newItems[action.data.activeItem].map(n => {
                if (n.name !== action.data.name) {
                    arr.push(n)

                }
                else {
                    CopyTotalCount--
                    CopyTotalPrice -= n.price
                }
            })
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.data.activeItem]: arr
                },
                totalCount: CopyTotalCount,
                totalPrice: CopyTotalPrice,
            }
        default:
            return state
    }
}
export default basket
export const addBurgerAC = (data) => ({ type: ADD_BURGER, data })
export const deleteOneBurgerAC = (data) => ({ type: DELETE_ONE_BURGER, data })
export const clearAC = () => ({ type: CLEAR })
export const deleteGroupBurgerAC = (data) => ({ type: DELETE_GROUP_BURGER, data })