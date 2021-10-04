import React, {useState} from "react";
import "./style.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Changepassword from "./components/Changepassword";
import Tweet from "./components/Tweet";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {

  const [users, setUsers] = useState([
    {
      "id": "roydeepak01.miblog",
      "name": "Deepak Kumar Roy",
      "email": "deepakroy@gamil.com",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
      "followers": [
        {
          "userId": 'agarwalrohit01.miblog',
          "userName": 'Rohit Agarwal'
        },
        {
          "userId": 'chauhansunil01.miblog',
          "userName": 'Sunil Chauhan'
        }
      ],
      "following": [
        {
          "userId": 'chauhansunil01.miblog',
          "userName": 'Sunil Chauhan'
        }
      ]
    },
    {
      "id": "agarwalrohit01.miblog",
      "name": "Rohit Agarwal",
      "email": "rohitagarwal@gamil.com",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
      "followers": [
        {
          "userId": 'chauhansunil01.miblog',
          "userName": 'Sunil Chauhan'
        },
        {
          "userId": 'roydeepak01.miblog',
          "userName": 'Deepak Kumar Roy'
        }
      ],
      "following": [
        {
          "userId": 'singhpravesh01.miblog',
          "userName": 'pravesh Singh'
        }
      ]
    },
    {
      "id": "chauhansunil01.miblog",
      "name": "Sunil Chauhan",
      "email": "sunilchauhan@gamil.com",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
      "followers": [
        {
          "userId": 'roydeepak01.miblog',
          "userName": 'Deepak Kumar Roy'
        },
        {
          "userId": 'singhpravesh01.miblog',
          "userName": 'pravesh Singh'
        } 
      ],
      "following": [
        {
          "userId": 'agarwalrohit01.miblog',
          "userName": 'Rohit Agarwal'
        }
      ]
    },
    {
      "id": "singhpravesh01.miblog",
      "name": "pravesh Singh",
      "email": "praveshsingh@gamil.com",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
      "followers": [
        {
          "userId": 'agarwalrohit01.miblog',
          "userName": 'Rohit Agarwal'
        }
      ],
      "following": [
        {
          "userId": 'chauhansunil01.miblog',
          "userName": 'Sunil Chauhan'
        }
      ]
    }
  ]);

  const [posts, setPosts] = useState([
    {
      'userId': 'agarwalrohit01.miblog',
      'userName': 'Rohit Agarwal',
      'datePosted': '14 Nov, 2019',
      'postMsg': 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiumerror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'replies': [
        {
          'userId': 'singhpravesh01.miblog',
          'userName': 'Pravesh Singh',
          'datePosted': '15 Nov, 2019',
          'postMsg': 'Voluptatem accusantium doloremque laudan tiumerror sit voluptatem',
        }
      ]
    },
    {
      'userId': 'chauhansunil01.miblog',
      'userName': 'Sunil Chauhan',
      'datePosted': '13 Nov, 2019',
      'postMsg': 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiumerror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'replies': [
        {
          'userId': 'agarwalrohit01.miblog',
          'userName': 'Rohit Agarwal',
          'datePosted': '14 Nov, 2019',
          'postMsg': 'Voluptatem accusantium doloremque laudan tiumerror sit voluptatem',
        }
      ]
    },
    {
      'userId': 'singhpravesh01.miblog',
      'userName': 'Pravesh Singh',
      'datePosted': '12 Nov, 2019',
      'postMsg': 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiumerror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'replies': [
        {
          'userId': 'chauhansunil01.miblog',
          'userName': 'Sunil Chauhan',
          'datePosted': '13 Nov, 2019',
          'postMsg': 'Voluptatem accusantium doloremque laudan tiumerror sit voluptatem',
        }
      ]
    },
    {
      'userId': 'roydeepak01.miblog',
      'userName': 'Deepak Kumar Roy',
      'datePosted': '12 Nov, 2019',
      'postMsg': 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tiumerror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'replies': [
        {
          'userId': 'chauhansunil01.miblog',
          'userName': 'Sunil Chauhan',
          'datePosted': '13 Nov, 2019',
          'postMsg': 'Voluptatem accusantium doloremque laudan tiumerror sit voluptatem',
        }
      ]
    }
  ]);

  const [login, setLogin]=useState([
    {
      "id": "roydeepak01.miblog",
      "name": "Deepak Kumar Roy",
      "email": "deepakroy@gamil.com",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
      "followers": ["Subham", "Rohit", "Sunil"],
      "following": "dasarijit@gamil.com"
    }
  ]);


  return (
    <>
    <Router>
    <Header login={login} />
      <Switch>
      <Route exact path = "/"><Home posts={posts} /></Route>
      <Route exact path = "/login" ><Login /></Route>
      <Route exact path = "/signup"><Signup /></Route>
      <Route exact path = "/profile/:id"><Profile users={users} posts={posts} /></Route>
      <Route exact path = "/changepassword"><Changepassword /></Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
