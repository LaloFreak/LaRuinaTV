import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { onChangeInput, OnSubmitLogIn } from '../../handlers/auth';
import { logIn} from '../../middlewares/redux/actions';
import { authCss } from './css/authCss';
import s from './css/LogIn.module.css'

const LogIn = () => {
    let loggedAccount = useSelector(state=> state.loggedAccount)
    let redirect = useSelector(state=> state.redirect)
    let history = useHistory();
    const dispatch = useDispatch();

    const inputStateInitial = {
      userName: '',
      contraseña: ''
    }
    const [input, setInput] = useState(inputStateInitial)
    // const [errors, setErrors] = useState({
    //     userName: '',
    //     contraseña: ''
    // })

  
    useEffect(() => {
      setInput(inputStateInitial)
      history.push(redirect)
    },[loggedAccount, history, setInput]);

  return (
    <div className='LogInBody'>
        <button 
        className='tog'
        onClick={()=> authCss('togCreate')}
        >Crear cuenta
        </button>
        <div className='formCont'>
          <ul className={s.form_ul}>
                <h1>Iniciar Sesión</h1>
                <form className={s.form}>
                  <li className={s.form_li}>Nombre de usuario</li>
                  <input type="text" name='userName' value={input.userName} onChange={e => {return onChangeInput(e.target.name,e.target.value,input,setInput)}} placeholder='alias o e-mail' />
                  <li className={s.form_li}>Contraseña</li>
                  <input type="password" name='contraseña' value={input.contraseña} onChange={e => {return onChangeInput(e.target.name,e.target.value,input,setInput)}} placeholder='contraseña' />
                </form>
          </ul>
        </div>
        <ul className={s.btn_ul}>
                <li><button 
                className='button1'
                type='submit'
                value='onSubmit'
                onClick={e=> {return  e.preventDefault(),dispatch(logIn([input]))}}
                >Entrar</button></li>
                <li><button 
                className='button2'
                onClick={()=> authCss('cancelLogIn')}>
                Cancelar
                </button></li>
            </ul>
    </div>
  )
}

export default LogIn