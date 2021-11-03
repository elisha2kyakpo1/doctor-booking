import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Users from './components/login/Users';
import Doctor from './components/Doctor';
import UserToken from './components/login/UserToken';
import DoctorRegisteration from './components/DoctorRegisteration';

function App() {
  const { token, setToken } = UserToken();
  if (!token) {
    return <Users setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <DoctorRegisteration />
          </Route>
          <Route path="/users">
            <Doctor />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
