import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';


/* ------------   ACTION CREATORS     ------------------ */

const getStudents = students => ({ type: GET_STUDENTS, students });


/* ------------       REDUCERS     ------------------ */

export default function reducer(students = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    default:
      return students;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
       .then(res => {
         dispatch(getStudents(res.data));
       })
       .catch(err => console.error(err));
};
