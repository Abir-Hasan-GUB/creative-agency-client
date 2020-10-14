import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainHome from './Componants/Home/MainHome/MainHome';
import Login from './Componants/Login/Login';
import NotFound from './Componants/NotFound/NotFound';
import Order from './Componants/Shared/Order/Order';
import Review from './Componants/Shared/Review/Review';
import Service from './Componants/Shared/Service/Service';
import SarviceList from './Componants/Shared/SarviceList/SarviceList';
import AddSarvice from './Componants/Shared/AddSarvice/AddSarvice';
import MakeAdmin from './Componants/Shared/MakeAdmin/MakeAdmin';
import PrivateRoute from './Componants/Shared/PrivateRoute/PrivateRoute';
import AdminPanel from './Componants/Shared/AdminPanel/AdminPanel';
import VarifyClientOrAdmin from './Componants/VarifyClientOrAdmin/VarifyClientOrAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <h1>Name: {loggedInUser.name}</h1>
    <Router>
      <Switch>
          <Route exact path="/">
            <MainHome />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/order">
            <Order></Order>
          </Route>

          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/sarvice">
            <Service></Service>
          </Route>

          <Route path="/varify">
            <VarifyClientOrAdmin></VarifyClientOrAdmin>
          </Route>

          {/* <Route path="/admin">
            <AdminPanel></AdminPanel>
          </Route> */}
          {/* <PrivateRoute path="/admin">
          <AdminPanel></AdminPanel>
          </PrivateRoute> */}

          <Route path="/sarviceList">
            <SarviceList></SarviceList>
          </Route>

          <Route path="/addSarvice">
            <AddSarvice></AddSarvice>
          </Route>

          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          
         
{/* 
          <PrivateRoute path="/VolunteerRegisterList">
            <VolunteerRegisterList/>
          </PrivateRoute>

          <PrivateRoute path="/addEvent">
            <AddEvent></AddEvent>
          </PrivateRoute>

          <PrivateRoute path="/register">
          <Register name={loggedInUser.name} email={loggedInUser.email} />
          </PrivateRoute>
           */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
    </Router>

    </UserContext.Provider>
  );
}

export default App;
