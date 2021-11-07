import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import './App.css';
import Users from './components/login/UsersSignIn';
import Doctor from './components/Doctor';
import UserToken from './components/login/UserToken';
import SignUp from './components/signUp/Signup';

function App() {
  const { token, setToken } = UserToken();
  console.log(token);
  if (token === null) {
    return <Users setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <SignUp />
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard"> </Route>
          <Route path="/users">
            <Doctor />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
