// import React from 'react';
// import PropTypes from 'prop-types';
// import { Form, Button, Card } from 'react-bootstrap';
// import { addDoctor } from '../api/LoginSignUp';
// import './DoctorRegisteration.css';

// const DoctorRegisteration = (props) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     addDoctor(formData)
//       .then((data) => props.setDoctor(data.doctor))
//       .catch((error) => error);
//   };

//   return (
//     <section className="signup">
//       <div className="inner-signup">
//         <div className="container">
//           <div className="inner">
//             <h1>Sign Up</h1>
//           </div>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label htmlFor="name">Name of Doctor</Form.Label>
//               <Form.Control
//                 className="input"
//                 type="text"
//                 placeholder="Enter name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label htmlFor="name">Email address</Form.Label>
//               <Form.Control
//                 className="input"
//                 type="email"
//                 placeholder="Enter email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label htmlFor="name">Specialization</Form.Label>
//               <Form.Control
//                 className="input"
//                 type="text"
//                 placeholder="Enter Specialization"
//                 onChange={(e) => setSpecialization(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label htmlFor="name"> Upload image</Form.Label>
//               <Form.Control
//                 className="input"
//                 type="file"
//                 placeholder=""
//                 name="image"
//                 accept="image/*"
//                 onChange={(e) => setImage(e.target.value)}
//               />
//             </Form.Group>

//             <Button className="submit" variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </div>
//       </div>
//     </section>
//   );
// };
// DoctorRegisteration.propTypes = {
//   setDoctor: PropTypes.func.isRequired,
// };

// export default DoctorRegisteration;
