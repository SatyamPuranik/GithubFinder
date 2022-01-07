import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = (props) =>  {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;





// import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
// import Users from './components/users/Users';
// import User from './components/users/User';
// import Search from './components/users/Search';
// import Alert from './components/layout/Alert';
// import About from './components/pages/About';
// import axios from 'axios';
// import './App.css';

// // Components are like functions that return HTML elements.


// // We cannot directly return from a class, so we are using a function/method within a class to return.
// // That method needs to be called a render, render is actually a lifecycle method and it runs at a certain point when the components are loaded.
// class App extends Component {
//   // The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
//   state={
//     users: [],
//     user: {},
//     repos:[],
//     loading: false,
//     alert: null
//   };

//   // async componentDidMount(){
//   //   // Before fetching data we are setting loading to true. We cannot directly say this.state.loading = true;
//   //   this.setState({loading : true});

//   //   const res=await axios.get(`https://api.github.com/users?`);//res will be an object

//   //   // After we have fetched data we are setting loading to false & users to fetched users
//   //   this.setState({loading : false, users: res.data });
//   // }

//   // Search github users
//   searchUsers = async text => {
//     this.setState({ loading : true });

//     const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

//     this.setState({loading : false, users: res.data.items });
//   }

//   // Get a single github user
//   getUser = async (username) => {
//     this.setState({ loading : true });

//     const res = await axios.get(`https://api.github.com/users/${username}`);

//     this.setState({loading : false, user: res.data });
//   }

//   // Get users repos
//   getUserRepos = async username => {
//     this.setState({ loading : true });

//     const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);

//     this.setState({loading : false, repos: res.data });
//   }

//   // Clear users from state
//   clearUsers = () => this.setState({ users : [], loading : false });

//   // Set alert
//   setAlert = (msg,type) => { 
//     this.setState({ alert : { msg : msg, type: type } });

//     setTimeout(() => this.setState({ alert : null }) , 4000);
//   }


//   render(){
//     const {users, loading, user, repos } = this.state;

//     // jsx should have only one parent element
//     return (
//       <Router>
//         <div className="App">
//           <Navbar />
//           <div className="container">
//             <Alert alert={this.state.alert} />
//             <Switch>
//               <Route exact path='/' render={props => (
//                 <Fragment>
//                   <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} setAlert={this.setAlert} />
//                   <Users loading={loading} users={users} />
//                 </Fragment>
//               )} />

//               <Route exact path='/about' component={About} />
//               <Route exact path='/user/:login' render={ props => (
//                 <User {...props } getUser={this.getUser} getUserRepos={this.getUserRepos} user={user} loading={loading} repos={repos} />
//               )} />
//             </Switch>
//           </div>
//         </div>
//       </Router>

//       // <> // </>
//       // <React.Fragment> // </React.Fragment>
//     );

//     // Without jsx // return React.createElement('div',{className: 'App'},React.createElement('h1'),null,'Hello from React');
//   }
// }

// export default App;