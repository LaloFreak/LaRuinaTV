import s from './css/SearchBar.module.css'
import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom"
import { bottomPage, loadingSearchSet, searchMedia, searchStateChange, totalMedia } from '../../redux/actions'

export const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const mediaFound = useSelector((state) => state.mediaFound);
  const searchedMedia = useSelector((state) => state.searchedMedia);
  
  function onSubmit(e){
      e.preventDefault();
      history.push(mediaFound);
  }
  
  function onInputChange(e){
    dispatch(loadingSearchSet());
    dispatch(searchStateChange(e.target.value));
    dispatch(bottomPage());
    if(searchedMedia.length === 1 && e.target.value.toLowerCase() === searchedMedia.at(0).name) return dispatch(searchMedia(e.target.value.toLowerCase()));
    if(searchedMedia.length > 0 && searchedMedia.find(ev => ev.name === e.target.value.toLowerCase())) return dispatch(searchMedia(e.target.value.toLowerCase()));
    dispatch(totalMedia());
  }

  return (
    <div className={s.barCont}>
      <form className={s.form_search_bar} onSubmit={onSubmit}>
        <input 
        className={s.liSearchBar}
        type="text"
        placeholder="Buscar..."
        onChange={onInputChange}
        />
        {
          mediaFound? 
          (
            (typeof mediaFound === 'string')?
            <button className={s.liSearchBtnEn} type="submit" disabled={false}>
              <img className={s.mediaEn} src={''} alt="lrr" />
            </button>
            :
            <button className={s.liSearchBtnDis} type="submit" disabled={true}>
              <img className={s.mediaDis} src={pokeball} alt="pkm" />
            </button>
          )
          :
          <button className={s.liSearchBtnDis} type="submit" disabled={true}>
            <img className={s.mediaDis} src={''} alt="lrr" />
          </button>
        }
      </form>
    </div>
  )
}
