import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOut } from '../../middlewares/redux/actions'

const LogOut = () => {
    const currentUser = useSelector(state=>state.currentUser)
    const dispatch = useDispatch()
  return (
    <>
        <button onClick={()=>{ return dispatch(logOut({userName: currentUser}))}}>Salir</button>
    </>
  )
}

export default LogOut