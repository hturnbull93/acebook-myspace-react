import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Posts from './components/Posts';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import CreatePost from './components/CreatePost.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }
  render() { 
    return (      
       <BrowserRouter>
        <div>
          <div>{this.state.user.email}</div>
          <Navigation loggedInStatus={this.state.loggedInStatus} />
            <Switch>
             <Route 
             exact
             path="/" 
             render = { props => (
              <Home {...props} handleLogin = {this.handleLogin} loggedInStatus = {this.state.loggedInStatus} />
             )}/>

             <Route 
             exact 
             path="/posts" 
             render= { props => (
               <Posts {...props} loggedInStatus = {this.state.loggedInStatus} />
             )}/>

             <Route
             exact 
             path="/signup" 
             render = { props => (
            <Signup {...props} handleLogin = {this.handleLogin} loggedInStatus = {this.state.loggedInStatus} />
             )}/>

             <Route
             exact 
             path="/signin"
             render = { props => (
             <Signin {...props} handleLogin = {this.handleLogin} loggedInStatus = {this.state.loggedInStatus} />
             )}/>
             

             <Route path="/createpost" component={CreatePost}/> 

             <Route component={Error}/>
           </Switch>
          <div className = "lowerBar">Created with love by Angelica, Ed, Faye, Harry, Steven and Thomas</div>
        </div> 
      </BrowserRouter>
    );
  }
}
