import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="error404-body">
            <h2 className="error404-title">404</h2>
                <p className="error404-text">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/" className="error404-link">
                    Retourner sur la page d'accueil
                </NavLink>
        </div>
    );
};

export default Error404;