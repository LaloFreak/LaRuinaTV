import axios from 'axios'
import { 
    GET_POSTS, 
    GET_INFO, 
    GET_CATEGORIAS, 
    GET_MEDIATYPE, 
    GET_MEDIAURL, 
    RESET_MEDIA, 
    NEW_USER_CREATE, 
    LOG_IN, LOG_OUT, 
    CURRENT_VISOR, 
    RESET_VISOR, 
    LOGGED_ACCOUNT, 
    GET_USERS } from '../../misc'

export function getPosts() {
    return function(dispatch) {
        fetch('http://localhost:3001/media')
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type: GET_POSTS,
                payload: data
            })
        })
        .catch(e => console.log(e))
    }
}

export function getInfo(id) {
    return function(dispatch) {
        fetch(`http://localhost:3001/media/${id}`)
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type: GET_INFO,
                payload: data
            })
        })
        .catch(e => console.log(e))
    }
}

export function getCategorias(lista) {
    const listCat = []
    lista.map((e)=>{return e.categoria.map(el=>{return listCat.push(el)})})
    return {
        type: GET_CATEGORIAS,
        payload: new Set(listCat)
    }
}

export function getMediaType(mediainfo) {
    return {
        type: GET_MEDIATYPE,
        payload: mediainfo
    }
}
export function getMediaUrl(mediainfo) {
    return {
        type: GET_MEDIAURL,
        payload: mediainfo
    }
}

export function resetMedia() {
    return {
        type: RESET_MEDIA,
        payload: []
    }
}

export function newUserCreate(newUser){
    return function (dispatch){
    axios.post('http://localhost:3001/users/create', newUser)
    .then(res => {
        dispatch({
            type: NEW_USER_CREATE,
            payload: res.data,
        })
    })
    .catch(error => {
        return { payload: error };           
    });
}}

export function getLoggedAccount(){
    return function (dispatch){ 
        axios.get('http://localhost:3001/users/loggedaccount')
        .then(res => {
            dispatch({
                type: LOGGED_ACCOUNT,
                payload: res.data   
            })
        })
        .catch(() => {
            return { payload: false };         
        });
    }
}

export function logIn(input){
    return function (dispatch){ 
        axios.post('http://localhost:3001/users/login',input)
        .then(res => {
            dispatch({
                type: LOG_IN,
                payload: res.data
            })
        })
        .catch(() => {
            return { payload: false };         
        })
    }
}

export function logOut(userName){
    return function (dispatch){ 
        axios.post('http://localhost:3001/users/logout',userName)
        .then(res => {
            dispatch({
                type: LOG_OUT,
                payload: res.data
            });
        })
        .catch(() => {
            return { payload: true };
        });
    }
}

export function getCurrentVisor(index){
    return {
        type: CURRENT_VISOR,
        payload: index
    }
}
export function getResetVisor(){
    return {
        type: RESET_VISOR,
    }
}

export function getUsers(){
    return function (dispatch){ 
        axios.get('http://localhost:3001/users/users')
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        })
        .catch((e) => {
            console.log(e)
        })
    }
}