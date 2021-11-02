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

const signUpUser = (credentials) => {
  return fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      "Accept": "application/json"
    },
    body: credentials
  })
  .then(data => data.json())
};