import React, { useEffect } from 'react';
import s from "../Utils/css/Slider.module.css";
import Visor from '../Utils/Visor';
import Footer from '../Utils/Footer';
import Slider from '../Utils/Slider';
import { BodyCss } from '../../functions/BodyCss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { getCategorias, getLoggedAccount, getPosts, getUsers, resetMedia } from '../../middlewares/redux/actions';

const Browser = () => {
    BodyCss()
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const userState = useSelector(state=> state.userState)
    const visorList = useSelector(state=>state.visorList)
    const listaCategorias = useSelector(state=>state.listaCategorias)
    const sliderCategoria = (categoria) => visorList.filter(e=>e.categoria.find(el=>el===categoria))
    useEffect(()=>{
        dispatch(resetMedia())
        dispatch(getUsers())
        dispatch(getPosts())
        dispatch(getLoggedAccount(pathname))
    },[dispatch, pathname])
    useEffect(()=>{
        dispatch(getCategorias(visorList))
    },[visorList, dispatch])
 
    let id = 0
    return (
        <div className='browserBody'>

{/* ---------------------VISOR--------------------- */}
    {
        (userState? userState === "online":null && visorList?.length > 1 )? <Visor/> : dispatch(getPosts())
    }

{/* --------------------SLIDERS-------------------- */}
    {   
        (userState? userState === "online":null && visorList?.length > 1)? 
        ([...new Set(listaCategorias)].map(e=>
            {
                if(id === 0){ id++; return <Slider titulo={'Contenido'} categoria={visorList} style={s} id={`s`}key={`s`}/>}
                else{id = e.id; return <Slider titulo={e} categoria={sliderCategoria(e)} style={s} id={`s${e.id}`} key={`s${e}`}/>}
            }
        )) : dispatch(getPosts())
    }

{/* ---------------------FOOTER--------------------- */}

                        <Footer/>

        </div>
    )
}

export default Browser