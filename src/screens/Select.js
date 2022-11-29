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
            <div className='select-wrapper'>
                <select value={option} name="exp" id="exp" onChange={onChangeSelection}>
                    <option value="Experienced">Experienced</option>
                    <option value="In-experienced">In-experienced</option>
                </select>
            </div>
            <br/>
            <Link className='link-selection' to={option === 'Experienced' ? '/Game' : '/Instructions'}>Start Game</Link>
        </div>
    )
}
