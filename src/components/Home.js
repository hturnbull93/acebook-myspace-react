import  wilson from './wilson.gif'
import './MyStyles.css' 

 
import React, { Component } from 'react';
import SignupForm from './SignupForm'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <h1>Home</h1>
                <p>Welcome to Acebook Myspace</p>
            </div>
         );
    }
}
 