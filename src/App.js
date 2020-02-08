import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>HATS PAGE</div>
);

function App() {
  return (
    <Switch>
      <Route
        path='/'
        exact={true}
        component={HomePage}
      />
      <Route
        path='/hats'
        exact={true}
        component={HatsPage}
      />
    </Switch>
  );
}

export default App;
