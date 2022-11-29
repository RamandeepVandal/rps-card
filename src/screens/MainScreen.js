import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/MainScreen.css';

export const MainScreen = () => {

    let [option, setOption] = useState('');

    // set the option based on user selection
    const onChangeSelection = (e) => {
        setOption(option = e.target.value);
    }

    return (
        <div className='primary-section'>
            <div className='wrapper'>
                <h1>Rock Paper Scissors - Card Game</h1>
                <Link to="/Instructions"><button>Instructions</button></Link>
                <div className="selection" onChange={onChangeSelection}>
                    <input type="radio" id="pvp" name="pvp-selection" value="pvp" />
                    <label htmlFor="pvp">PVP</label>
                    <input type="radio" id="pve" name="pvp-selection" value="pve" />
                    <label htmlFor="pve">PVE</label>
                </div>
                <br />
                <Link className='link-selection' to={option === 'pve' ? '/SelectAI' : '/Select'}>Start Game</Link>
            </div>
        </div>
    )
}
