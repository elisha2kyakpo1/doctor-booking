import React from 'react';
import PropTypes from 'prop-types';
import { addDoctor } from './api/LoginSignUp';

const Doctor = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    addDoctor(formData)
      .then((data) => props.setDoctor(data.post))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="caption">
        Name of Doctor
        <input type="text" name="name" />
      </label>
      <label htmlFor="caption">
        Email
        <input type="text" name="email" />
      </label>
      <label htmlFor="caption">
        Specialization
        <input type="text" name="specialization" />
      </label>
      <label htmlFor="image">
        Upload image
        <input type="file" name="image" accept="image/*" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
Doctor.propTypes = {
  setDoctor: PropTypes.func.isRequired,
};

export default Doctor;
