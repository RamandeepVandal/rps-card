import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Instructions.css';

export const Instructions = () => {

    return (
        <div className='instructions'>
            <div className='ins-wrapper'>
                <h1>Instructions</h1>
                <h3><span>1.</span> Each player will have 10 health. </h3>
                <h3><span>2.</span> The game ends when one or more players’ health is lower than 1.</h3>
                <h3><span>3.</span> Each player will get 6 random cards of rock-paper-scissors.</h3>
                <h3><span>4.</span> If a player wins a round, the opponent takes 1 damage. </h3>
                <h3><span>5.</span> If both players selected the same. The player with more cards wins. The opponent takes 1 damage.</h3>
                <Link to="/"><button>Back</button></Link>
            </div>
        </div>
    )
}
