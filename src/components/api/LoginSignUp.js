import { addDoctorAction, removeDoctorAction } from '../../redux/Doctors';

const loginUser = async (credentials) => fetch('http://localhost:3000/authenticate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(credentials),
})
  .then((data) => data.json());

const signUpUser = (payload) => {
  const userDetails = { ...payload };
  return async function addUser(dispatch) {
    return fetch('https://book-a-doctor.herokuapp.com/sign_up', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: userDetails,
    })
      .then((response) => response.status === 201 && dispatch(addUser(userDetails)));
  };
};

const addDoctor = (payload) => {
  const credentials = { ...payload };
  return async function addUser(dispatch) {
    return fetch('https://book-a-doctor.herokuapp.com/api/v1/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((response) => response.status === 201 && dispatch(addDoctorAction(credentials)));
  };
};

const removeDoctorApi = (id) => {
  const success = 'The doctor was deleted successfully!';
  const msg = 'Waiting';
  return async function removeUser(dispatch) {
    fetch(`https://book-a-doctor.herokuapp.com/api/v1/doctors/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.text())
      .then((text) => text === success && dispatch(removeDoctorAction(id)))
      .catch((error) => error === msg);
  };
};

export {
  loginUser,
  signUpUser,
  removeDoctorApi,
  addDoctor,
};
