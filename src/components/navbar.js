import React,{useState} from 'react';
import ButtonNavbar from './ButtonNavbar';
import Dropdown from './Dropdown';
import '../components/navbar.css'
import {Link} from 'react-router-dom';
const navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <a href='/' className='navbar-logo'>
                    Mairie
                </a>
            </nav>
        </>
    );
};

export default navbar;