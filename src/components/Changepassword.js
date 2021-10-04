import React, {useState} from "react";
import "../style.css";

const Changepassword = () => {
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const submit = (e)=>{
      e.preventDefault();
      if(newpassword === confirmpassword){
      console.log(oldpassword,newpassword,confirmpassword);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      }else{
        alert('New password doesnot matches with Confirm password')
      }
      setNewPassword("");
      setConfirmPassword("");
    }
  return(
    <>

<div className="container my-3 col-md-4 mx-auto shadow ">
<form onSubmit={submit}>
<div className="text-center"><h1>Change Password</h1></div>
<div className="mb-3">
    <label className="form-label">Enter Old Password</label>
    <input type="password" className="form-control" value={oldpassword} onChange={(e)=>setOldPassword(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">Enter New Password</label>
    <input type="password" className="form-control" value={newpassword} onChange={(e)=>setNewPassword(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">Confirm password</label>
    <input type="password" className="form-control" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
  </div>
  <div className="text-center"> <button type="submit" className="btn btn-primary mb-3">Submit</button></div>
</form>
</div>
    </>
  );
}

export default Changepassword;