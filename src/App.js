import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import About from './component/pages/About';
import Adduser from './component/users/addUser';
import Navbar from './component/Layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './component/pages/NotFound';
import EditUser from './component/users/editUser';
import User from './component/users/user';
function App() {
  return (
    <div >
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exxact path="/user/add" component={Adduser}/>
    <Route exxact path="/user/edit/:id" component={EditUser}/>
    <Route exxact path="/user/:id" component={User}/>
    <Route component={NotFound}/>
    </Switch>
     
     
    </Router>
     
    </div>
  );
}

export default App;
