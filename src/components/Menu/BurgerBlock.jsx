import React from 'react'
import "./BurgerBlock.scss"

export default function BurgerBlock({name,description,cost}) {
    return (
        <div className="burger-block">
            <div className="burger-block__name">{name}</div>
            <div className="burger-block__description">{description}</div>
            <div className="burger-block__cost">{cost}</div>
        </div>
    )
}
