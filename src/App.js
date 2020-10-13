import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainHome from './Componants/Home/MainHome/MainHome';
import Login from './Componants/Login/Login';
import NotFound from './Componants/NotFound/NotFound';


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <MainHome />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          
          {/* <PrivateRoute path="/registerDetails">
            <RegisterDetails name= {loggedInUser.name}/>
          </PrivateRoute>

          <PrivateRoute path="/VolunteerRegisterList">
            <VolunteerRegisterList/>
          </PrivateRoute>

          <PrivateRoute path="/addEvent">
            <AddEvent></AddEvent>
          </PrivateRoute>

          <PrivateRoute path="/register">
          <Register name={loggedInUser.name} email={loggedInUser.email} />
          </PrivateRoute> */}
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
