import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/">
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>
                <NavLink to="/lodgingInformation"> {/*ne doit pas apparaitre sur les pages, seulement actif au clic du logement */}
                    <li>Fiche Logement</li> 
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;