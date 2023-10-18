import React from 'react';

const Banner = (props) => {
 
    return (
        <div className='banner' style={{backgroundImage: `url(${props.img})`}}>
            <h1 className="banner-title">{props.text}</h1>
        </div>
    );
};


export default Banner;