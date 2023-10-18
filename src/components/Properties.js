import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../data.json';
import Card from './Card'


const Properties = () => {
    return(
    <div className='properties'>
        {data.map((item) => (
        <NavLink 
            key={item.id} 
            to={`/lodgingInformation/${item.id}`} 
            className="property-link">
          <Card
            title={item.title}
            altImage={item.description}
            cover={item.cover}
            />
        </NavLink>
    ))}
    </div>
    )
};

export default Properties;