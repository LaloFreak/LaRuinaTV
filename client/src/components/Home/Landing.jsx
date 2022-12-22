import React, { useEffect } from 'react'
import ruinaLogo from '../../design/ruina-logo.png'
import visorIntroVideo from '../../design/laruina-intro.mp4'
import CreateAccount from '../Auth/CreateAccount'
import LogIn from '../Auth/LogIn'
import s from './css/Landing.module.css'
import { LandingCss } from './css/LandingCss'
import { useDispatch } from 'react-redux'
import { getLoggedAccount, getUsers } from '../../middlewares/redux/actions'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Landing = () => {
    LandingCss()
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getLoggedAccount(pathname))
        dispatch(getUsers())
    },[dispatch, pathname])
    return (
    <div className={s.landingBody}>
        <div className={s.ruinaLogoCont}>
            <img className={s.ruinaLogo} src={ruinaLogo} alt="La Ruina TV" width='120' />
        </div>
        <div>
            <CreateAccount/>
        </div>
        <div>
            <LogIn/>
        </div>
        <div className={s.visor}>
            <video className={s.visorVideoIntro} src={visorIntroVideo} autoPlay={true} loop muted  type="video/mp4"/>
            <div className={s.visorCanvas}></div>
            <div className={s.welcomeCont}>
                <h1>DISFRUTA Y COMPARTE TODO NUESTRO CONTENIDO</h1>
                <ul className={s.welcomeUl}>
                    <li><button 
                    className={s.button1}
                    onClick={()=>
                        {
                            document.querySelector('.LogInBody').style.transitionDuration="1s"
                            document.querySelector('.LogInBody').style.transform="translate(0)"
                        }   
                    }   
                    
                    >Iniciar sesión</button></li>
                    <li><button 
                    className={s.button2}
                    onClick={()=>
                        {
                            document.querySelector('.CreateAccountBody').style.transitionDuration="1s"
                            document.querySelector('.CreateAccountBody').style.transform="translate(0)"
                        }   
                    }   
                    
                    >Crear cuenta</button></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Landing