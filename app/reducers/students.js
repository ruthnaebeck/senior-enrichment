import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET = 'GET_STUDENTS';
const CREATE = 'CREATE_STUDENT';
const REMOVE = 'REMOVE_STUDENT';


/* ------------   ACTION CREATORS     ------------------ */

const get = students => ({ type: GET, students });
const create = student => ({ type: CREATE, student });
const remove = id => ({ type: REMOVE, id });


/* ------------       REDUCERS     ------------------ */

export default function reducer(students = [], action) {
  switch (action.type) {
    case GET:
      return action.students;
    case CREATE:
      return [...students, action.student];
    case REMOVE:
      return students.filter(student =>
        student.id !== action.id);

    default:
      return students;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
    .then(res => dispatch(get(res.data)))
    .catch(err => console.error('Error fetchStudents', err));
};

export const addStudent = student => dispatch => {
  axios.post('/api/students', student)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error('Error addStudent', err));
};

export const removeStudent = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
    .then(res => res.data)
    .catch(err => console.error('Error removeStudent', err));
};
