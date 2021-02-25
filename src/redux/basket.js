const ADD_BURGER = "ADD_BURGER"
const DELETE_ONE_BURGER = "DELETE_BURGER"
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
    totalEntry: [],

}

const basket = (state = initialState, action) => {

    switch (action.type) {
        case ADD_BURGER: {
            const items = {
                ...state.items,
                [action.data.activeItem]: !state.items[action.data.activeItem]
                    ? [action.data]
                    : [...state.items[action.data.activeItem], action.data]
            }

            const totalBurger = [].concat.apply([], Object.values(items))
            const totalPrice = totalBurger.reduce((sum, obj) => obj.price + sum, 0)

            let totalEntry = []

            totalBurger.map(a => {

                if (totalEntry.length == 0) totalEntry.push(a.name)

                if (!totalEntry.includes(a.name)) totalEntry.push(a.name)

            })
            return {
                ...state,
                items: items,
                totalCount: totalBurger.length,
                totalPrice: totalPrice,
                totalEntry: totalEntry,
            }
        }
        case DELETE_ONE_BURGER: {
            const newItems = {
                ...state.items
            }

            let CopyTotalCount = state.totalCount
            let CopyTotalPrice = state.totalPrice
            const arr = []
            let i = false
            newItems[action.data.activeItem].map(n => {
                if (n.name !== action.data.name || i === true) arr.push(n)
                else i = true
            })

            if (CopyTotalCount > 0) {
                let j = false
                let price = 0
                newItems[action.data.activeItem].map(n => {
                    if (action.data.price === n.price && action.data.name === n.name) {
                        j = true
                        price = n.price
                    }
                })
                if (j === true) {
                    CopyTotalCount--
                    CopyTotalPrice -= price
                }
            }
            
            const totalBurger = [].concat.apply([], Object.values(newItems))
            let totalEntry = []
            totalBurger.map(a => {

                if (totalEntry.length == 0) totalEntry.unshift(a.name)
        
                if (!totalEntry.includes(a.name)) totalEntry.unshift(a.name)
        
            })
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.data.activeItem]: arr
                },
                totalCount: CopyTotalCount,
                totalPrice: CopyTotalPrice,
                totalEntry: totalEntry,
            }
        }

        case DELETE_GROUP_BURGER: {
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
        }
        default:
            return state
    }
}
export default basket
export const addBurgerAC = (data) => ({ type: ADD_BURGER, data })
export const deleteOneBurgerAC = (data) => ({ type: DELETE_ONE_BURGER, data })
export const deleteGroupBurgerAC = (data) => ({ type: DELETE_GROUP_BURGER, data })