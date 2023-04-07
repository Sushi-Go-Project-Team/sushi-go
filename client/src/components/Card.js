import React from "react"

export default function Card(props) {
   // console.log(props)
    return (
        <div>
            <img src={props.image} className="Card--image" alt = {props.name}/>
            <p className="Card--name">{props.name}</p>
            <p className="Card--value">{props.value}</p> 
        </div>
    )
}