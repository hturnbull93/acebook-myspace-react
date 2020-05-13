import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Posts from './components/Posts';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Signup from './components/Signup.js';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/posts" component={Posts}/>
             <Route path="/signup" component={Signup}/>
              <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;