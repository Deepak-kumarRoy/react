import React, {useState,useRef} from "react";
import "../style.css";


const Home = (props) => {

  const [newmsg, setNewMsg]= useState("");
  const [reply,setReply] = useState("");

  const submit = (e) => {
    e.preventDefault();
    var obj = 
    { 
      'userId': 'agarwalrohit01.miblog',
      'userName': 'Rohit Agarwal',
      'datePosted': '14 Nov, 2019',
      'postMsg': newmsg,
      'replies': []
    };
  
    props.posts.unshift(obj);
    console.log(obj)
  };
 
  const textInput = useRef(null);
  
  const clicked = (e) => {
    e.preventDefault();
    console.log(textInput.current.value);
  }

  return(
    <>
  
  <div className="card container my-3 shadow">
    <div className="card-body ">
    <div className="input-group">
    <i className="bi bi-person-circle "></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>&nbsp;&nbsp;
  <textarea className="form-control" placeholder="Share your Post here...." value={newmsg} onChange={(e)=>setNewMsg(e.target.value)} ></textarea>
</div>
</div>
  <div className="text-end mb-3"><button type="submit" className="btn btn-primary" onClick={submit}>Post</button></div>
  </div>
  
  {props.posts.map((post,index) => (  
  <div className="card container my-3 shadow" key={index}>
  <div className="card-body">
    <div className="input-group">
  <i className="bi bi-person-circle "></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>&nbsp;&nbsp;
    <a href = {'/profile/' + post.userId }><h5 className="card-title" >{post.userName}</h5></a>&nbsp;&nbsp;{post.datePosted}</div>
    <p className="card-text"> </p>{post.postMsg} </div><hr />
    {post.replies.map((rep, index)=>(
  <div className="card-body" key={index}>
    <div className="input-group">
  <i className="bi bi-person-circle "></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>&nbsp;&nbsp;
    <a href={'/profile/' + rep.userId}><h5 className="card-title mb-3">{rep.userName}</h5></a>&nbsp;&nbsp;{rep.datePosted}</div>
    <p className="card-text">{rep.postMsg}</p>
    <input type="text" className="form-control" id='textInput'  placeholder="Write Comments..." ref={textInput} />
  </div>))} 
  <div className="text-end mb-3"><button type="submit" className="btn btn-primary" onClick={clicked}>Post</button></div>
  </div>
   ))}
    </>
  );
}

export default Home;