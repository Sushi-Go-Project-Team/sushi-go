import React from "react"

export default function Card(props) {
    return (
        <div>
            <img src={props.image} className="Card--image" alt = {props.name}/>
        </div>
    )
}