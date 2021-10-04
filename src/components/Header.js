import React, {useHistory} from "react";
import {Link} from "react-router-dom";

const Header=(props)=>{
  
 


  return(
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container">
     <Link className="navbar-brand" to="/">MI BLOG</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        {props.login.map((a,index)=>(
        <li className="nav-item" key={a.id}>
          <Link className="nav-link active" aria-current="page" to={"/profile/"+a.id}>My Profile</Link>
        </li>))}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/changepassword">Change Password</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Header;