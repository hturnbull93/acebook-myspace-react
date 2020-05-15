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
                <h1> Status: { this.props.loggedInStatus }</h1>
                <p>Welcome to Acebook Myspace</p>
            </div>
         );
    }
}
 