
const ФИШБУРГЕР = "ФИШБУРГЕР";
const BUD_БУРГЕР = "BUD_БУРГЕР";
const СЛОУ = "СЛОУ";
const КЛАССИКА = "КЛАССИКА";
const ГАМБУРГЕР = "ГАМБУРГЕР";
const ЧИКЕНБУРГЕР = "ЧИКЕНБУРГЕР";
const ЧИЗБУРГЕР = "ЧИЗБУРГЕР";


let initialState = {
    Фишбургер: 2,
    BUD_бургер: 3,
    Слоу: 1,
    Классика: null,
    Гамбургер: null,
    Чикенбургер: null,
    Чизбургер: null,

}

// const burgerStandartReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case ФИШБУРГЕР:
//             return { ...state, "Фишбургер": action.data }
//         case BUD_БУРГЕР:
//             return { ...state, "BUD бургер": action.data }
//         case СЛОУ:
//             return { ...state, "Слоу": action.data }
//         case КЛАССИКА:
//             return { ...state, "Классика": action.data }
//         case ГАМБУРГЕР:
//             return { ...state, "Гамбургер": action.data }
//         case ЧИКЕНБУРГЕР:
//             return { ...state, "Чикенбургер": action.data }
//         case ЧИЗБУРГЕР:
//             return { ...state, "Чизбургер": action.data }

//         default:
//             return state;
//     }
// }
const burgerStandartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ФИШБУРГЕР:
            return { ...state, "Фишбургер": action.data }
        case BUD_БУРГЕР:
            return { ...state, "BUD бургер": action.data }
        case СЛОУ:
            return { ...state, "Слоу": action.data }
        case КЛАССИКА:
            return { ...state, "Классика": action.data }
        case ГАМБУРГЕР:
            return { ...state, "Гамбургер": action.data }
        case ЧИКЕНБУРГЕР:
            return { ...state, "Чикенбургер": action.data }
        case ЧИЗБУРГЕР:
            return { ...state, "Чизбургер": action.data }

        default:
            return state;

    }

}

export default burgerStandartReducer

export const ФИШБУРГЕР1 = (data) => ({ type: ФИШБУРГЕР, data })
export const BUD_БУРГЕР1 = (data) => ({ type: BUD_БУРГЕР, data })
export const СЛОУ1 = (data) => ({ type: СЛОУ, data })
export const КЛАССИКА1 = (data) => ({ type: КЛАССИКА, data })
export const ГАМБУРГЕР1 = (data) => ({ type: ГАМБУРГЕР, data })
export const ЧИКЕНБУРГЕР1 = (data) => ({ type: ЧИКЕНБУРГЕР, data })
export const ЧИЗБУРГЕР1 = (data) => ({ type: ЧИЗБУРГЕР, data })
