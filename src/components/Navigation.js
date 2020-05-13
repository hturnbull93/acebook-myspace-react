import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
          <NavLink to="/signin">Sign in</NavLink>
       </div>
    );
}
 
export default Navigation;