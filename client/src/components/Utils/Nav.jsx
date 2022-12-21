import React, { useState } from 'react';
import ruinaLogo from '../../design/ruina-logo.png';
import { Link } from 'react-router-dom';
import LogOut from '../Auth/LogOut';
import { SearchBar } from './SearchBar';

const Nav = () => {
    const [posNav, setPosNav] = useState()

    window.onscroll = function() {navBack()};

    function navBack() {
        if (window.pageYOffset>= 100) {
            setPosNav((window.scrollY-100)/100)
            document.querySelector('.navCont').style.backgroundColor=`rgba(0, 0, 0, ${posNav})`
            document.querySelector('.navCont').style.transitionDuration='0.2'
        }
        else{
            document.querySelector('.navCont').style.background="linear-gradient(to bottom, #010101cf, rgba(255, 255, 255, 0))"
            document.querySelector('.navCont').style.transitionDuration='0.2'
        }
    }
    return (
    <div className='navCont'>
        <div className='ruinaLogoCont'>
            <Link to='/browser'>
                <img className='ruinaLogo' src={ruinaLogo} alt="La Ruina TV" width='120' />
            </Link>
        </div>
        <ul className='navMenu'>
            <li><Link to='/browser'>Inicio</Link></li>
            <li><Link to='/novedades'>Novedades</Link></li>
            <li><Link to='/lanzamientos'>Lanzamientos</Link></li>
            <li><Link to='/colaborar'>Colaborar</Link></li>
            <li><Link to='/tienda'> Tienda </Link></li>
            <ul className='navSearchBar'>
            <ul className='navLogOut'>
                <li><SearchBar/></li>
            </ul>
                <li><LogOut/></li>
            </ul>
        </ul>

        </div>
    )
}

export default Nav