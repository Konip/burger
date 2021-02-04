import React from 'react'
import "./BurgerBlock.css"

export default function BurgerBlock({name,description,cost}) {
    return (
        <div className="burger-block">
            <div>{name}</div>
            <div>{description}</div>
            <div>{cost}</div>
        </div>
    )
}
