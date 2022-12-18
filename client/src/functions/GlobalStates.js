import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function GlobalStates(){
    const history = useHistory()
    const userState = useSelector(state=>state.userState)
    userState==="online"? (history.push('/browser')): (history.push('/'))
}