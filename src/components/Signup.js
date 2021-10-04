import React, {useState, useHistory} from "react";
import "../style.css";

const Signup = () => {
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    
    const submit = (e)=>{
        e.preventDefault();
        if(password === confirmpassword){
        
        setUname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        }else{
          alert("password doesnot matches with confirmPassword")
        }
      }

  return(
    <>
      <div className="container my-3 col-md-4 mx-auto shadow">
      <form onSubmit={submit}>
      <div className="text-center"><h1>Sign Up</h1></div>
        <div className="mb-3">
          <label className="form-label">Enter your Name</label>
          <input type="text" className="form-control"  value={uname} onChange={(e)=>setUname(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Email</label>
          <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label class="form-label">Enter Password</label>
          <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm password</label>
          <input type="password" className="form-control" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
        </div>
        <div className="text-center"> <button type="submit" className="btn btn-primary">Submit</button></div>
      </form>
          <div className="text-center"><p>If you have already sign in! <a href="login"><strong>Sign In</strong></a></p></div>
      </div>

    </>
  );
}

export default Signup;