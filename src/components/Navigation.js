import React from 'react';
import { NavLink } from 'react-router-dom';

// Navigation component: Provides navigation links for the application
const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                {/* NavLink components are used for routing between different application paths */}
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;