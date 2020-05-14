import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navBar">
          <NavLink to="/signup" className="Nav_link">Sign up</NavLink>
          <NavLink to="/signin" className="Nav_link">Sign in</NavLink>
          <NavLink to="/posts" className="Nav_link">Posts</NavLink>
          <NavLink to="/createpost" className="Nav_link">Create Post</NavLink>
          <NavLink to="/" className="Nav_link">Home</NavLink>
          <div className = "lowerBar">Created with love by Angelica, Ed, Faye, Harry, Steven and Thomas</div>
       </div>
    );
}
 
export default Navigation;