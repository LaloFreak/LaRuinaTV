import React from 'react'
import { useDispatch } from 'react-redux'
import { resetOption } from '../../middlewares/redux/actions'

export const BackButton = () => {
    const dispatch = useDispatch()
    return (
        <div>      
            <button onClick={()=>{
            return(
            dispatch(resetOption()),
            document.querySelector(`body`).style.transitionDuration='2s',
            document.querySelector(`body`).style.transform='translateX(0)'
            )}
        }>
            Volver
        </button>
    </div>
  )
}
