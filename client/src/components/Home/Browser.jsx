import React, { useEffect } from 'react';
import st from "../Utils/css/Sliders.module.css"
import Nav from '../Utils/Nav';
import Visor from '../Utils/Visor';
import Footer from '../Utils/Footer';
import Sliders from '../Utils/Sliders';
import { BrowserCss } from './css/BrowserCss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCategorias, getLoggedAccount, getPosts, getUsers, resetMedia } from '../../middlewares/redux/actions';

const Browser = () => {
    BrowserCss()
    const dispatch = useDispatch()
    const userState = useSelector(state=> state.userState)
    const visorList = useSelector(state=>state.visorList)
    const listaCategorias = useSelector(state=>state.listaCategorias)
    const sliderCategoria = (categoria) => visorList.filter(e=>e.categoria.find(el=>el===categoria))
    useEffect(()=>{
        dispatch(getUsers())
        dispatch(resetMedia())
        dispatch(getLoggedAccount())
    },[dispatch])
    useEffect(()=>{
        dispatch(getPosts())
        dispatch(getCategorias(visorList))
    },[visorList, dispatch])

    let id = 0
    return (
        <div className='browserBody'>
{/* ----------------------NAV---------------------- */}
                         <Nav/>

{/* ---------------------VISOR--------------------- */}
    {
        userState === "online"? 
                        <Visor/>:null
    }

{/* --------------------SLIDERS-------------------- */}
    {   
        listaCategorias? 
        ([...new Set(listaCategorias)].map(e=>
            {
                if(id === 0){ id++; return <Sliders titulo={'Contenido'} categoria={visorList} style={st} id={`s`}key={`s`}/>}
                else{id = e.id; return <Sliders titulo={e} categoria={sliderCategoria(e)} style={st} id={`s${e.id}`} key={`s${id}`}/>}
            }
        )) : null
    }

{/* ---------------------FOOTER--------------------- */}
                        <Footer/>
        </div>
    )
}

export default Browser