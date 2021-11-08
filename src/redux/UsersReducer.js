// import axios from 'axios';
// import { toast } from 'react-toastify';
// import jwtDecode from 'jwt-decode';

// const url = 'http://localhost:3000';
// const initialState = {
//   token: sessionStorage.getItem('token'),
//   name: null,
//   email: null,
//   id: null,
// };
// export const signUp = (user) => (dispatch) => {
//   axios
//     .post(`${url}/signup`, user)
//     .then((token) => {
//       sessionStorage.setItem('token', token.data);
//       dispatch({
//         type: 'SIGN_UP',
//         token: token.data,
//       });
//     })
//     .catch((error) => {
//       console.log(error.response);
//       toast.error(error.response?.data, {
//         position: toast.POSITION.BOTTOM_RIGHT,
//       });
//     });
// };
// /* eslint no-case-declarations: 'error' */
// /* eslint-env es6 */
// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SIGN_UP':
//       toast('Welcome...', {
//         position: toast.POSITION.BOTTOM_RIGHT,
//       });
//       const user = jwtDecode(token.data);
//       return {
//         ...initialState,
//         token: action.token,
//         name: user.name,
//         email: user.email,
//         id: user.id,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
