import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Select.css';

export const Select = () => {

    let [option, setOption] = useState('Experienced');

    // check user input
    const onChangeSelection = (e) => {
        setOption(option = e.target.value);
    }

    return (
        <div className='primary-section'>
            <h1>Experience Level: </h1>
            <label for="exp">Choose Level:</label>
            <br/>
            <div className="selection" onChange={onChangeSelection}>
                    <input type="checkbox" id="Experienced" name="pvp-selection" value="Experienced" />
                    <label htmlFor="Experienced">Experienced</label>
                    <input type="checkbox" id="In-Experienced" name="pvp-selection" value="In-Experienced" />
                    <label htmlFor="In-Experienced">In-Experienced</label>
                </div>
            <br/>
            <Link className='link-selection' to={option === 'Experienced' ? '/Game' : '/Instructions'}>Start Game</Link>
        </div>
    )
}
