import React, {useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./UserContext";

const Nav = ({logout}) => {
  // const { currUser } = useContext(UserContext);

  const loggedInNav = () => {
    return(
      <ul>
        {/* if user is logged in  */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {/* <li>Log Out {username}</li> */}
      </ul>
      
    )
  }

  const loggedOutNav = () => {
    return ( 
      <ul>
        {/* if user is not logged in */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    )
  }

  return (
    <nav>
      <Link to="/">
        Jobly
      </Link>
      {/* {currUser ? loggedInNav() : loggedOutNav()} */}
    </nav>
);
}

export default Nav;