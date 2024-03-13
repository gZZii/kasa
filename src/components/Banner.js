import React from 'react';

const Banner = ({ img, children }) => {
    return (
        <div className='banner' style={{backgroundImage: `url(${img})`}}>
            <h1 className="banner-title">{children}</h1>
        </div>
    );
};

export default Banner;