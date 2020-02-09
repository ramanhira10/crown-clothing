import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Header />
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
    </div>
    
  );
}

export default App;
