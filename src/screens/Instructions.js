import React from 'react'
import { Link } from 'react-router-dom';

export const Instructions = () => {

    return (
        <div>
            <h1>Instructions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur voluptas aliquid perspiciatis recusandae at in sequi laborum culpa, 
                officiis dicta rerum fugiat hic praesentium aut totam accusantium ipsam harum sunt.</p>
            <Link to="/"><button>Back</button></Link>
        </div>
    )
}
