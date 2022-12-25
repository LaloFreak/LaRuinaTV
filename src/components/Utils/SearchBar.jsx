import s from './css/SearchBar.module.css';
import React from 'react';
import searchIcon from '../../design/search-icon.png';
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { loadingSearchSet, searchMedia, searchStateChange, totalMedia } from '../../middlewares/redux/actions';
import { searchBarFunction } from './css/SearchBar';

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
    if(searchedMedia.length === 1 && e.target.value.toLowerCase() === searchedMedia.at(0).name) return dispatch(searchMedia(e.target.value.toLowerCase()));
    if(searchedMedia.length > 0 && searchedMedia.find(ev => ev.name === e.target.value.toLowerCase())) return dispatch(searchMedia(e.target.value.toLowerCase()));
    dispatch(totalMedia());
  }

  return (
    <div className={s.barCont}>
      <form className={s.form_search_bar} onSubmit={onSubmit}>
        <input 
          className={s.liSearchBar}
          id="liSearchBar"
          type="text"
          placeholder="Buscar..."
          onChange={onInputChange}
          onMouseEnter={()=>{return searchBarFunction('enter')}}
          onMouseLeave={()=>{return searchBarFunction('leave')}}
        />
          <button 
            className={s.liSearchBtn} 
            type="submit" 
            disabled={false}
            onMouseEnter={()=>{return searchBarFunction('enter')}}
            onMouseLeave={()=>{return searchBarFunction('leave')}}
              >
            <img className={s.mediaSearch} src={searchIcon} height='20' alt="search" />
          </button>
      </form>
    </div>
  )
}
