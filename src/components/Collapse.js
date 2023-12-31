import React from 'react';
import { useState,useEffect } from 'react';
import vector from "../assets/img/vector.png";

const Collapse = (props) => {
    const [open, setOpen] = useState(false);
    const [rotate, setRotate] = useState(false);

    const toggle = () => {
        setOpen(!open);
        setRotate(!rotate);
    };

    const vectorClass = rotate ? "vector rotate180" : "vector";
    const contentClass = open ? "collapse-content open" : "collapse-content";

    return (
        <div className='collapse'>
            <div className='collapse-bandeau'>
                <h3 className='collapse-title'>{props.label}</h3>
                <img
                    src={vector}
                    alt="icone d'ouverture/fermeture du collapse"
                    onClick={toggle}
                    className={vectorClass}
                />
            </div>
            <div className={contentClass}>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Collapse;
