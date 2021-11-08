import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import { signUpUser } from '../api/LoginSignUp';

const SignUp = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password && confirmPassword) {
      dispatch(signUpUser({
        name, email, password, confirmPassword,
      }));
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      e.target.reset();
    }
  };

  return (
    <section onSubmit={handleSubmit} className="login">
      <div className="inner-login">
        <div className="container">
          <div className="inner">
            <h1>Sign up</h1>
          </div>
          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="input"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="input"
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="input"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Form.Text className="text">
                you have to enter at least more than 6 characters!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                className="input"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="submit" variant="primary" type="submit">
              Submit
            </Button>
            <div className="signup-div">
              <p>Already a member?</p>
              <Card.Link className="ml-2" href="#">Sign in</Card.Link>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
