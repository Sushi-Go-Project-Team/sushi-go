import React from "react"

const LoadPlayerRow = (props) => {
    return (
        <div className = "playerRow">
            {/* <img src= {props.image1} className= "profile-pic" /> */}
            <p className = "loadPlayer"> {props.firstName}</p>
            {/* <img src= {props.image2} className= "profile-pic" /> */}
            <p className = "loadPlayer">{props.secondName}</p>
        </div>
    )
}
export default LoadPlayerRow