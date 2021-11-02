const loginUser = async(credentials) => {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
};

const signUpUser = (payload) => {
  const userDetails = { ...payload };
  return async function addUser(dispatch) {
    return fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      "Accept": "application/json"
    },
    body: userDetails
  })
  .then((response) => response.status === 201 && dispatch(addUserApi(userDetails)));
  };
};

const removeUserApi = (id) => {
  const success = 'The doctor was deleted successfully!';
  const msg = 'Waiting';
  return async function removeUser(dispatch) {
    fetch(`${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.text())
      .then((text) => text === success && dispatch(removeUserApi(id)))
      .catch((error) => error === msg);
  };
};