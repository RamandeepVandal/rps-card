import React from 'react'
import { Link } from 'react-router-dom';

export const MainScreen = () => {

    return (
        <div>
            <h1>Rock Paper Scissors - Card Game</h1>
            <Link to="/Instructions"><button>Instructions</button></Link>
            <Link to="/Game"><button>Start Game</button></Link>
        </div>
    )
}
