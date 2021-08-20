import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { GithubState } from './context/github/GithubState';
import {Alert} from './components/Alert'
import {NavBar} from './components/NavBar';
import {AlertState} from  '../src/context/alert/AlertState';
import {Home}  from './page/Home';
import {About} from './page/About';
import {Profile} from './page/Profile';



function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <NavBar />
          <div className="container pt-4">
            <Alert alert={{text: 'Test alert'}}/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/profile/:name" component={Profile}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
