import React from "react"

export default function Card(props) {
    return (
        <div>
            <img src={props.image} className="Card--image"/>
            <img src={props.image} className="Card--image"/>
            <h1 className="Card--name">props.name</h1>
            <h1 className="Card--value">props.value</h1>
        </div>
    )
}