import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getPosts, getUsers, resetMedia } from "../middlewares/redux/actions";

export function GlobalStates(){
    const history = useHistory()
    const dispatch = useDispatch()
    const redirect = useSelector(state=>state.redirect)
    dispatch(resetMedia())
    dispatch(getUsers())
    dispatch(getPosts())
    history.push(redirect)
}