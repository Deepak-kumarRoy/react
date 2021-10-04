import React, {useState} from "react";
import "../style.css";
import { useHistory } from "react-router-dom";

const Login=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let history = useHistory();
  const submit = (e)=>{
    e.preventDefault();
    if(email === 'deepak@gmail.com' && password === '123456789'){
      history.push("/home");
    }else{
      alert("Enter valid Credential" );
    }
  }


  return(
    <>
  <div className="container my-3 col-md-4 mx-auto shadow">
<form onSubmit={submit}>
<div className="text-center"><h1>Login</h1></div>
  <div className="mb-3">
    <label className="form-label">Enter Email</label>
    <input type="email" className="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)} />
   </div>
  <div className="mb-3">
    <label className="form-label">Enter Password</label>
    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label >Remember me</label>
  </div>
  <div className="text-center"> <button type="submit" className="btn btn-primary">Submit</button></div>
</form>
  <div className="text-center mb-3">
        <p>If you have no sign up yet! <a href="/signup"><strong>Sign Up</strong></a></p>
        <p ><small >Note: Daque ipsa quae ab illo inventore veritatis et quasi architecto</small></p>
        
    </div> 
</div>

    {/* <div className="mainbody">
  <div className="log_bg"></div>
  <div className="login_area">
    <h1>Login</h1>
    <div className="tablearea">
      <div className="log-box">
        <form action="timeline.html" onSubmit={submit}>
          <div className="frm-row"><input type="text" className="inputarea" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
            
          </div>

          <div className="frm-row"><input type="password" className="inputarea" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
          <div className="frm-row btl">
            <label><input type="checkbox" /> Remember me</label>
            <button type="submit"  className="btns roundshape full" >LOGIN</button>
            </div>
        </form>
        <p>If you have no sign up yet! <a href="signup"><strong>Sign Up</strong></a></p>
        <p><small>Note: Daque ipsa quae ab illo inventore veritatis et quasi architecto</small></p>
      </div>
    </div>
  </div>
</div> */}
    </>
  );
}

export default Login;