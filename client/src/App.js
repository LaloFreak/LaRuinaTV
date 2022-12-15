import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Browser from './components/Home/Browser';
import Landing from './components/Home/Landing';
import View from './components/Pages/View';
import Play from './components/Pages/Play';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/browser'>
            <Browser />
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
