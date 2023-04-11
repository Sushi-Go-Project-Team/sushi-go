import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import ResultPlayerCard from "./ResultPlayerCard"

export default function Results({socket, user, results}) {

    console.log(results);
    return (
        <div>
            <h1 className = "results">Results</h1>
            <link rel="stylesheet" type="text/css" href="style.css"/>
            <div class = "container">
                <ResultPlayerCard number = "1" name={results[0]} score={results[1]} />
                <ResultPlayerCard number = "2" name={results[2]} score={results[3]} />
                <Button className = "rematch"><Link to="/join" >Rematch!</Link></Button>
            </div>
        </div>
    )
}