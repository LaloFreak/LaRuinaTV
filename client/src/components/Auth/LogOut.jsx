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
          document.querySelector(`.navCont`).style.transitionDuration='.2s',
          document.querySelector(`.bodyApp`).style.transitionDuration='5s',
          document.querySelector(`.bodyApp`).style.transform='translateX(0)',
          document.querySelector(`.navCont`).style.width='100vw'
          )}
      }>
        Salir
      </button>
    </>
  )
}

export default LogOut