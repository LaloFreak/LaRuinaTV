import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ruinaLogo from '../../design/ruina-logo.png';
import LogOut from '../Auth/LogOut';

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
        <ul className='ruinaNavMenu'>
            <li>Novedades</li>
            <li>Lanzamientos</li>
            <li>Colaborar</li>
            <li>Tienda</li>
            <li><LogOut/></li>
        </ul>
        </div>
    )
}

export default Nav