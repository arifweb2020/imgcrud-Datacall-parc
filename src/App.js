import React,{useState,useEffect} from 'react';
import {BrowserRouter as  Router , Route, Switch} from 'react-router-dom';
import Nav from './Nav';

import Home from './component/Home';
import UsertDetails from './component/UsertDetails';
import PatientsDetails from './component/PatientsDetails';

function App() {

  


  return (
    
    <Router>
      <Switch>
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home} />
      <Route exact path="/user-details/:id" component={UsertDetails} /> 
      <Route exact path="/patients-details/:id" component={PatientsDetails} /> 
      

    </div>
    </Switch>
    </Router>
   
  );
}

export default App;
