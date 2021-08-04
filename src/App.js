import './App.css';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import About from './Components/Pages/About'
import AddUsers from './Components/Users/AddUsers'
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Navbar from './Components/Layout/Navbar';
import EditUser from './Components/Users/EditUser'
import NotFound from './Components/Pages/NotFound';
import ViewUser from './Components/Users/ViewUser';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/users/add" component={AddUsers}/>
        <Route exact path="/users/edit/:id" component={EditUser}/>
        <Route exact path="/users/:id" component={ViewUser}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
