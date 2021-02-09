import React from 'react'
import Menu from './Menu'
import React, { Component } from 'react'
import { connect } from 'react-redux';

import React from 'react'

export default function MenuContainer() {
    return (
        <div>
            <Menu Фишбургер={Фишбургер} BUD_бургер={BUD_бургер} Слоу={Слоу}
                    Классика={Классика} Гамбургер={Гамбургер} Чикенбургер={Чикенбургер}
                    Чизбургер={Чизбургер}
                />
                {/* <Menu /> */}
        </div>
    )
}


let mapTostateProps = (state) => {
    return {
        Фишбургер: state.burgerStandartReducer.Фишбургер,
        BUD_бургер: state.burgerStandartReducer.BUD_бургер,
        Слоу: state.burgerStandartReducer.Слоу,
        Классика: state.burgerStandartReducer.Классика,
        Гамбургер: state.burgerStandartReducer.Гамбургер,
        Чикенбургер: state.burgerStandartReducer.Чикенбургер,
        Чизбургер: state.burgerStandartReducer.Чизбургер,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

        ФИШБУРГЕР1: () => {
            dispatch(ФИШБУРГЕР1(data))
        },
        BUD_БУРГЕР1: () => {
            dispatch(BUD_БУРГЕР1(data))
        },
        СЛОУ1: () => {
            dispatch(СЛОУ1(data))
        },
        КЛАССИКА1: () => {
            dispatch(КЛАССИКА1(data))
        },
        ГАМБУРГЕР1: () => {
            dispatch(ГАМБУРГЕР1(data))
        },
        ЧИКЕНБУРГЕР1: () => {
            dispatch(ЧИКЕНБУРГЕР1(data))
        },
        ЧИЗБУРГЕР1: () => {
            dispatch(ЧИЗБУРГЕР1(data))
        },
    }
}

connect(mapTostateProps, mapDispatchToProps)(MenuContainer)




