import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Browser from './components/Home/Browser';
import Landing from './components/Home/Landing';
import View from './components/Pages/View';
import Play from './components/Pages/Play';
import { Novedades } from './components/Pages/Novedades';
import { Tienda } from './components/Pages/Tienda';
import { Lanzamientos } from './components/Pages/Lanzamientos';
import { Colaborar } from './components/Pages/Colaborar';
import { GlobalStates } from './functions/GlobalStates';

function App() {
  GlobalStates()
  return (
    <div className="App">
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
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
        </Switch>
    </div>
  );
}

export default App;
