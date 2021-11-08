import { addDoctorAction, removeDoctorAction } from '../../redux/Doctors';

const token = sessionStorage.getItem('token');

const loginUser = async (credentials) => {
  if (token) {
    fetch('http://localhost:3000/authenticate', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json());
  }
};

const signUpUser = (payload) => async function addUser(dispatch) {
  return fetch('http://localhost:3000/sign_up', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
    body: payload,
  })
    .then((response) => response.status === 201 && dispatch(addUser(payload)));
};

const addDoctor = (payload) => {
  const credentials = { ...payload };
  return async function addUser(dispatch) {
    return fetch('https://book-a-doctor.herokuapp.com/api/v1/doctors', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
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
