import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET_STUDENT = 'GET_STUDENT';


/* ------------   ACTION CREATORS     ------------------ */

const getStudent = student => ({ type: GET_STUDENT, student });


/* ------------       REDUCERS     ------------------ */

export default function reducer(student = { campus: {} }, action) {
  switch (action.type) {
    case GET_STUDENT:
      return action.student;

    default:
      return student;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchStudent = (id) => dispatch => {
  axios.get(`/api/student/${id}`)
  .then(res => {
    dispatch(getStudent(res.data));
  })
  .catch(err => console.error(err));
};
