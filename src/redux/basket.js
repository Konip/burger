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
    totalInfo: [],
}

const basket = (state = initialState, { type, data }) => {

    switch (type) {
        case ADD_BURGER: {
            const items = {
                ...state.items,
                [data.activeItem]: !state.items[data.activeItem]
                    ? [data]
                    : [...state.items[data.activeItem], data]
            }

            const totalBurger = [].concat.apply([], Object.values(items))
            const totalPrice = totalBurger.reduce((sum, obj) => obj.price + sum, 0)

            let totalEntry = []
            let totalInfo = []

            totalBurger.map(a => {

                if (totalEntry.length === 0) totalEntry.push(a.name)

                if (!totalEntry.includes(a.name)) totalEntry.push(a.name)
                    
            })

            for (let index = 0; index < totalEntry.length; index++) {
                let name = null
                let count = null
                let totalPrice = null
                let img = null
                let activeItem = null
                let price = null

                totalBurger.map(a => {
                    if (a.name === totalEntry[index]) {
                        name = a.name
                        img = a.img
                        totalPrice += a.price
                        count++
                        activeItem = a.activeItem
                        price = a.price
                    }
                })

                totalInfo.push({
                    name: name,
                    totalPrice: totalPrice,
                    count: count,
                    img: img,
                    activeItem: activeItem,
                    price: price,
                })
            }

            return {
                ...state,
                items: items,
                totalCount: totalBurger.length,
                totalPrice: totalPrice,
                totalEntry: totalEntry,
                totalInfo: totalInfo,
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
            newItems[data.activeItem].map(n => {
                if (n.name !== data.name || i === true) arr.push(n)
                else i = true
            })

            if (CopyTotalCount > 0) {
                let j = false
                let price = 0
                newItems[data.activeItem].map(n => {
                    if (data.price === n.price && data.name === n.name) {
                        j = true
                        price = n.price
                    }
                })
                if (j === true) {
                    CopyTotalCount--
                    CopyTotalPrice -= price
                }
            }

            let CopyTotaEntry = state.totalEntry
            let CopyTotalInfo = state.totalInfo
            let count = 0
            CopyTotalInfo.map(c => {
                // debugger
                if (data.name === c.name && data.price !== c.totalPrice) {
                    c.totalPrice = c.totalPrice - c.price
                    c.count--
                }

                else if (data.name === c.name && data.price === c.totalPrice) {
                    CopyTotalInfo.splice(count, 1)
                    CopyTotaEntry.splice(count, 1)
                }

                count++
            })

            return {
                ...state,
                items: {
                    ...state.items,
                    [data.activeItem]: arr
                },
                totalCount: CopyTotalCount,
                totalPrice: CopyTotalPrice,
                totalInfo: CopyTotalInfo,
                totalEntry: CopyTotaEntry,
            }
        }

        case DELETE_GROUP_BURGER: {
            const newItems = {
                ...state.items
            }

            const arr = []
            let CopyTotalCount = state.totalCount
            let CopyTotalPrice = state.totalPrice

            newItems[data.activeItem].map(n => {
                if (n.name !== data.name) {
                    arr.push(n)
                }
                else {
                    CopyTotalCount--
                    CopyTotalPrice -= n.price
                }
            })

            let CopyTotaEntry = state.totalEntry
            let CopyTotalInfo = state.totalInfo
            let count = 0
            CopyTotalInfo.map(c => {

                if (data.name === c.name) {
                    CopyTotalInfo.splice(count, 1)
                    CopyTotaEntry.splice(count, 1)
                }

                count++
            })
            return {
                ...state,
                items: {
                    ...state.items,
                    [data.activeItem]: arr
                },
                totalCount: CopyTotalCount,
                totalPrice: CopyTotalPrice,
                totalInfo: CopyTotalInfo,
                totalEntry: CopyTotaEntry,
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