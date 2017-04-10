import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET = 'GET_STUDENT';
const UPDATE = 'UPDATE_STUDENT';


/* ------------   ACTION CREATORS     ------------------ */

const get = student => ({ type: GET, student });
const update = student => ({ type: UPDATE, student });


/* ------------       REDUCERS     ------------------ */

export default function reducer(student = { campus: {} }, action) {
  switch (action.type) {
    case GET:
      return action.student;
    case UPDATE:
      return action.student;

    default:
      return student;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchStudent = (id) => dispatch => {
  axios.get(`/api/student/${id}`)
  .then(res => dispatch(get(res.data)))
  .catch(err => console.error('Error fetchStudent', err));
};

export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/student/${id}`, student)
  .then(res => dispatch(update(res.data)))
  .catch(err => console.error('Error updateStudent', err));
};
