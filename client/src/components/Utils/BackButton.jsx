import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { resetOption } from '../../middlewares/redux/actions'

export const BackButton = () => {
    const dispatch = useDispatch()
    const redirect = useSelector(state=>state.redirect)
    return (
        <div>      
            <button onClick={()=>{
            if (redirect === "/browser") return(
                dispatch(resetOption()),
                document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                document.querySelector(`.visor`).style.transform='translateX(0)',
                document.querySelector(`.navCont`).style.transitionDuration='.2s',
                document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                document.querySelector(`.navCont`).style.width='100vw',
                document.querySelector(`.navMenu`).style.display='flex',
                document.querySelector(`.browserBody`).style.height='auto',
                document.querySelector(`.browserBody`).style.overflowY='scroll'
            )
            if (redirect === "/novedades") return(
                dispatch(resetOption()),
                document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                document.querySelector(`.navCont`).style.transitionDuration='.2s',
                document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                document.querySelector(`.navCont`).style.width='100vw',
                document.querySelector(`.navMenu`).style.display='flex',
                document.querySelector(`.browserBody`).style.height='auto',
                document.querySelector(`.browserBody`).style.overflowY='scroll'
            )
            if (redirect === "/lanzamientos") return(
                dispatch(resetOption()),
                document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                document.querySelector(`.navCont`).style.transitionDuration='.2s',
                document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                document.querySelector(`.navCont`).style.width='100vw',
                document.querySelector(`.navMenu`).style.display='flex',
                document.querySelector(`.browserBody`).style.height='auto',
                document.querySelector(`.browserBody`).style.overflowY='scroll'
            )
            if (redirect === "/colaborar") return(
                dispatch(resetOption()),
                document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                document.querySelector(`.navCont`).style.transitionDuration='.2s',
                document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                document.querySelector(`.navCont`).style.width='100vw',
                document.querySelector(`.navMenu`).style.display='flex',
                document.querySelector(`.browserBody`).style.height='auto',
                document.querySelector(`.browserBody`).style.overflowY='scroll'
            )
            if (redirect === "/tienda") return(
                dispatch(resetOption()),
                document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                document.querySelector(`.navCont`).style.transitionDuration='.2s',
                document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                document.querySelector(`.navCont`).style.width='100vw',
                document.querySelector(`.navMenu`).style.display='flex',
                document.querySelector(`.browserBody`).style.height='auto',
                document.querySelector(`.browserBody`).style.overflowY='scroll'
            )
            return(
                dispatch(resetOption()),
                document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                document.querySelector(`.navCont`).style.transitionDuration='.2s',
                document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                document.querySelector(`.navCont`).style.width='100vw',
                document.querySelector(`.navMenu`).style.display='flex',
                document.querySelector(`.browserBody`).style.height='auto',
                document.querySelector(`.browserBody`).style.overflowY='scroll'
            )




        }}>
            Volver
        </button>
    </div>
  )
}
