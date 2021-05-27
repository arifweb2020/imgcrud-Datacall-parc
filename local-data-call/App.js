import React,{useState,useEffect} from 'react';
import {BrowserRouter as  Router , Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import LocalDatafetch from './LocalDatafetch';
import UserDetails from './UserDetails';
function App() {

  


  return (
    
    <Router>
      <Switch>
    <div className="App">
      <Nav/>
      <Route exact path="/" component={LocalDatafetch} />
      <Route exact path="/user-details/:id" component={UserDetails} />

    </div>
    </Switch>
    </Router>
   
  );
}

export default App;
