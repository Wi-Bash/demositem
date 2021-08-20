import React from 'react';
import{NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
            <NavLink exact to="/Maville" activeClassName="nav-active">Ma ville</NavLink>
            <NavLink exact to="/servicepopulation" activeClassName="nav-active">Service population</NavLink>
            <NavLink exact to="/About" activeClassName="nav-active">About</NavLink>
            
        </div>
    );
};

export default Navigation;