import React from 'react';
import './Transport.css';

const Transport = (props) => {
    const {name, imgUrl} = props.vehicle;
    return (
        <div className="vehicles">
            <img src={imgUrl} alt=""/>
            <h2>{name}</h2>
        </div>
    );
};

export default Transport;