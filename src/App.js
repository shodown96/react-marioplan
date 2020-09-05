import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/> <br/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" render={props => <ProjectDetails {...props} />}></Route>
            <Route path="/signin" render={props => <SignIn {...props} />}></Route>
            <Route path="/signup" render={props => <SignUp {...props} />}></Route>
            <Route path="/create" render={props => <CreateProject {...props} />}></Route>

            {/* <Route exact path="/"><Dashboard/></Route>
            <Route path="/project/:id"><ProjectDetails/></Route>
            <Route path="/signin"><SignIn/></Route>
            <Route path="/signup"><SignUp/></Route>
            <Route path="/create"><CreateProject/></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
