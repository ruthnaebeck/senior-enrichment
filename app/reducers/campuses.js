import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET = 'GET_CAMPUSES';
const CREATE = 'CREATE_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

const get = campuses => ({ type: GET, campuses });
const create = campus => ({ type: CREATE, campus });


/* ------------       REDUCERS     ------------------ */

export default function reducer(campuses = [], action) {
  switch (action.type) {
    case GET:
      return action.campuses;
    case CREATE:
      return [action.campus, ...campuses];

    default:
      return campuses;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res => dispatch(get(res.data)))
    .catch(err => console.error('Error fetchCampuses', err));
};

export const addCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error('Error addCampus', err));
};
