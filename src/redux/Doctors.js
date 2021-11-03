const GET_DOCTORS = 'DOCTORS/GET_DOCTORS';
const ADD_DOCTOR = 'DOCTORS/ADD_DOCTOR';
const REMOVE_DOCTOR = 'DOCTORS/REMOVE_DOCTOR';

const loadDoctors = (json) => ({
  type: GET_DOCTORS,
  json,
});

const removeDoctorAction = (id) => ({
  type: REMOVE_DOCTOR,
  id,
});

const addDoctorAction = (payload) => ({
  type: ADD_DOCTOR,
  payload,
});

const getDoctors = () => (dispatch) => {
  fetch('https://book-doctor-appointment.herokuapp.com/doctors')
    .then((response) => response.json())
    .then((json) => dispatch(loadDoctors(json)));
};

const doctorReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.json.map((doctor) => {
        const {
          id,
          name,
          email,
          specialization,
        } = doctor;
        return {
          id,
          name,
          email,
          specialization,
        };
      });
    default:
      return state;
  }
};

export {
  doctorReducer,
  getDoctors,
  addDoctorAction,
  removeDoctorAction,
};
