import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients';
import AllPrescription from './components/AllPrescription/AllPrescription/AllPrescription';
import AddDoctors from './components/AddDoctors/AddDoctors';
import Navigation from './components/Shared/Navigation/Navigation';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUSer] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUSer]}>
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/appointment">
            <Navigation></Navigation>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Navigation></Navigation>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Navigation></Navigation>
            <Login></Login>
          </Route>
          <Route path="/allPatients">
            <Navigation></Navigation>
            <AllPatients></AllPatients>
          </Route>
          <Route path="/prescription">
            <Navigation></Navigation>
            <AllPrescription></AllPrescription>
          </Route>
          <Route path="/addDoctors">
            <Navigation></Navigation>
            <AddDoctors></AddDoctors>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
