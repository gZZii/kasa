import React, { useEffect, useState } from 'react';
import data from '../'

const Properties = () => {
    
    const [data, setData] = useState([]);


    useEffect(() => {

        setData(data)
    },[]);

    console.log(data);
    return (
        <div className='properties'>
            <ul>
                {data.map((property) => (
                    <li>{property.cover}{property.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Properties;