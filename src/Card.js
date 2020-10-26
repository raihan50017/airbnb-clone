import React from 'react';
import './Card.css';

const Card = ({ src, title, description, price }) => {
    return (
        <div className="card">
            <img src={src} alt=""></img>
            <div className="card_info">
                <h1>{title}</h1>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    );
};

export default Card;