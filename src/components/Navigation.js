import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = (props) => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
          <NavLink to="/signin">Sign in</NavLink>
          { props.loggedInStatus === 'LOGGED_IN' ? <NavLink to="/createpost">Create Post</NavLink> : null }
       </div>
    );
}
 
export default Navigation;