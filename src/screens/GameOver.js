import React from 'react'
import { Link } from 'react-router-dom';

export const GameOver = () => {

    return (
        <div>
            <h1>Game Over!</h1>
            <Link to="/MainScreen"><button>Play Again</button></Link>
        </div>
    )
}
