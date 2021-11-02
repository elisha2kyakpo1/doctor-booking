import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Doctor from './components/Doctor';

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Users setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Doctor />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
