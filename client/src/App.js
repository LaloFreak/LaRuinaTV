import './App.css';
import React from 'react';
import Landing from './components/Home/Landing';
import Browser from './components/Home/Browser';
import View from './components/Pages/View';
import Play from './components/Pages/Play';
import Nav from './components/Utils/Nav';
import { Tienda } from './components/Pages/Tienda';
import { Novedades } from './components/Pages/Novedades';
import { Colaborar } from './components/Pages/Colaborar';
import { useSelector } from 'react-redux';
import { SlideCanvas } from './components/Utils/SlideCanvas';
import { GlobalStates } from './functions/GlobalStates';
import { Lanzamientos } from './components/Pages/Lanzamientos';
import { Switch, Route } from 'react-router-dom';

function App() {
  GlobalStates()
  const option = useSelector(state=>state.option)
  return (
    <div className="App">
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <div>
            <Nav/>
            <div className='bodyApp'>
            <SlideCanvas option={option? option:""}/>
            <Route exact path='/browser'>
              <Browser />
            </Route>
            <Route exact path='/novedades'>
              <Novedades />
            </Route>
            <Route exact path='/lanzamientos'>
              <Lanzamientos />
            </Route>
            <Route exact path='/colaborar'>
              <Colaborar />
            </Route>
            <Route exact path='/tienda'>
              <Tienda />
            </Route>
            <Route path={'/view/v=:urlid=_type_=:typeMedia=_id_=:id'}>
              <View/>
            </Route>
            <Route path={'/play/p=:urlid=_type_=:typeMedia=_id_=:id'}>
              <Play/>
            </Route>
            </div>
          </div>
        </Switch>
    </div>
  );
}

export default App;
