import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import './App.css';
import UsersSignIn from './components/login/UsersSignIn';
import UserToken from './components/login/UserToken';
import SignUp from './components/signUp/Signup';
import DoctorRegistration from './components/doctor-register/DoctorRegistration';
import NavLinks from './components/nav/NavLinks';
import Home from './components/home/Home';

function App() {
  const { token, setToken } = UserToken();
  if (token) {
    return <UsersSignIn setToken={setToken} />;
  }
  return (
    <Router>
      <div className="App">
        <NavLinks />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration">
            <DoctorRegistration />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <UsersSignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
