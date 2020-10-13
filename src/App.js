import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Banner from './Componants/Home/Banner/Banner';
import NavBar from './Componants/Home/NavBar/NavBar';
import MainHome from './Componants/Home/MainHome/MainHome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainHome></MainHome>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
