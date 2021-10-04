import React,{useState} from "react";
import "../style.css";
import {withRouter} from "react-router-dom";

const Profile = (props)=>{

  for(var i=0; i<props.users.length; i++)
  {
    if (props.users[i].id==props.match.params.id){
      var arr = props.users[i];
    }
  }
  
  for(var j=0; j<props.posts.length; j++)
  {
    if (props.posts[j].userId==props.match.params.id){
      var array = props.posts[j];
    }
  }
  return(
    <>
    {[arr].map((a, index) => ( 
   <div>   
   <div className="container my-3" key={index}>
    <h3 className="card-title"> {a.name} </h3>{a.id}&nbsp;&nbsp;
    <button type="submit" className="btn btn-primary" >Follow</button>
    </div>
    <div className="container mb-3 ">
      <h5> Photo: </h5>
      <i className="bi bi-person-circle "></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
      </div>
      <div className="container my-3 ">
      <h5> Email: </h5><p> {a.email} </p>
        </div>
        <div className="container my-3 ">
      <h5> About: </h5><p> {a.about} </p>
        </div>
        </div>
        ))}
    <div className="container"><h5> Posts: </h5></div>
  {[array].map((a, index)=>(

  <div className=" card card-body container mb-3 shadow"key={index}>
    
    <p className="card-text">{a.postMsg}</p>
  </div>
  ))}

    </>
  );
}

export default withRouter(Profile);