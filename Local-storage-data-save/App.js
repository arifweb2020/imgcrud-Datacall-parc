import React,{useState,useEffect} from 'react';
import {BrowserRouter as  Router , Route, Switch} from 'react-router-dom';
import Nav from './Nav';

import Home from './component/Home';
import ContactDetails from './component/ContactDetails';
function App() {

  


  return (
    
    <Router>
      <Switch>
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact-details/:id" component={ContactDetails} />
      

    </div>
    </Switch>
    </Router>
   
  );
}

export default App;
