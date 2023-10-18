import React from 'react';

const Card = (props) => {
    return (   
        <div className="card" style={{backgroundImage: `url(${props.cover})`}}>
            <h2 className="card-title">{props.title}</h2>
        </div>
    )
};


export default Card