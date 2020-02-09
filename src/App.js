import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <Switch>
      <Route
        path='/'
        exact={true}
        component={HomePage}
      />
      <Route
        path='/shop'
        exact={true}
        component={ShopPage}
      />
    </Switch>
  );
}

export default App;
