import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import ResultPlayerCard from "./ResultPlayerCard"

export default function Results() {
    return (
        <div>
            <h1 className = "results">Results</h1>
            <link rel="stylesheet" type="text/css" href="style.css"/>
            <div class = "container">
                <ResultPlayerCard number = "1" name="Player 1" score="60"/>
                <ResultPlayerCard number = "2" name="Other Player" score="50"/>
                <ResultPlayerCard number = "3" name="Another Player" score="45"/>
                <ResultPlayerCard number = "4" name="Last But Not Least 4" score="43"/>
                <Button className = "rematch"><Link to="/join" >Rematch!</Link></Button>
            </div>
        </div>
    )
}