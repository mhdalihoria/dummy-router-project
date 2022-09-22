import React from "react";
import {Link, useMatch} from 'react-router-dom'


function Profile(props) {
  const matches = useMatch()
  console.log(matches)
  return (
    <div>
      <nav style={{ backgroundColor: "#ADD8E6" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <h1>Profile Page</h1>
        <Link to="/profile/whatever">Details</Link> <br/>
        <Link to="/profile/info">Info</Link>

    </div>
  );
}

export default Profile;
