import React, { useState } from 'react';
import ruinaLogo from '../../design/ruina-logo.png';
import s from './css/Nav.module.css'
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { ProfileMenu } from '../Log/ProfileMenu';
import navBack from './css/Nav';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../middlewares/redux/actions';

const Nav = () => {
    const dispatch = useDispatch()
    const [posNav, setPosNav] = useState()
    window.onscroll = function() {navBack(setPosNav, posNav)};
    return (
    <div className='navCont'>
        <div className='ruinaLogoCont'>
            <Link to='/browser'>
                <img 
                    className='ruinaLogo' 
                    src={ruinaLogo} 
                    alt="La Ruina TV"
                    width='120' 
                    onClick={()=>{
                        return(
                        dispatch(resetOption()),
                        document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                        document.querySelector(`.navCont`).style.transitionDuration='.2s',
                        document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                        document.querySelector(`.navCont`).style.width='100vw',
                        document.querySelector(`.navMenu`).style.display='flex',
                        document.querySelector(`.browserBody`).style.height='auto',
                        document.querySelector(`.browserBody`).style.overflowY='scroll',
                        document.querySelector(`.visor`).style.transform='translateX(0)'
                        )}}
                />
            </Link>
        </div>
        <ul className='navMenu'>
            <li><Link to='/browser'>Inicio</Link></li>
            <li><Link to='/novedades'>Novedades</Link></li>
            <li><Link to='/lanzamientos'>Lanzamientos</Link></li>
            <li><Link to='/colaborar'>Colaborar</Link></li>
            <li><Link to='/tienda'> Tienda </Link></li>
            <ul className='navSearchBar'>
                <li><SearchBar/></li>
                <ul className={s.profileMenuBtn}>
                    <li><ProfileMenu/></li>
                </ul>
            </ul>
        </ul>

        </div>
    )
}

export default Nav