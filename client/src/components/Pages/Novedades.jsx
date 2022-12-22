import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { BodyCss } from '../../functions/BodyCss'
import { getLoggedAccount, getUsers } from '../../middlewares/redux/actions'

export const Novedades = () => {
  BodyCss()
  const {pathname} = useLocation()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getLoggedAccount(pathname))
    dispatch(getUsers())
},[dispatch, pathname])
  return (
    <div className='browserBody'>
    </div>
  )
}