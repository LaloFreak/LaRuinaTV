import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOut, resetOption } from '../../middlewares/redux/actions'

const LogOut = () => {
    const currentUser = useSelector(state=>state.currentUser)
    const dispatch = useDispatch()
  return (
    <>
      <button onClick={()=>{
        return( 
          dispatch(logOut({userName: currentUser})),
          dispatch(resetOption()),
          document.querySelector(`body`).style.transitionDuration='2s',
          document.querySelector(`body`).style.height='100vh',
          document.querySelector(`body`).style.transform='translateX(0)',
          document.querySelector(`body`).style.overflowX='hidden'
        )}
      }>
        Salir
      </button>
    </>
  )
}

export default LogOut