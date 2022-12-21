import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getPosts, getUsers, resetMedia } from "../middlewares/redux/actions";

export function GlobalStates(){
    const history = useHistory()
    const dispatch = useDispatch()
    dispatch(resetMedia())
    dispatch(getUsers())
    dispatch(getPosts())
    const redirect = useSelector(state=>state.redirect)
    history.push(redirect)
}