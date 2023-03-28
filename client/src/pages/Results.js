import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"

export default function Results() {
    return (
        <div>
            <h1 className = "Results">Results</h1>
            <link rel="stylesheet" type="text/css" href="style.css"/>
            <body class = "Container">
                <pre><p className = "Player">1 PLAYER                                      60</p></pre>
                <pre><p className = "Player">2 OTHER PLAYER                                50</p></pre>
                <pre><p className = "Player">3 OTHER PLAYER 2                              43</p></pre>
                <pre><p className = "Player">4 LAST BUT NOT LEAST                          45</p> </pre>
                <Button><Link to="/join" className = "button--link">Rematch!</Link></Button>
                {/*<button className = "Rematch"> Rematch!</button>*/}
            </body>
        </div>
    )
}