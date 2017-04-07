import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET = 'GET_CAMPUSES';
const CREATE = 'CREATE_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

const get = campuses => ({ type: GET, campuses });
const create = campus => ({ type: CREATE, campus });
const remove = id => ({ type: REMOVE, id });


/* ------------       REDUCERS     ------------------ */

export default function reducer(campuses = [], action) {
  switch (action.type) {
    case GET:
      return action.campuses;
    case CREATE:
      return [...campuses, action.campus];
    case REMOVE:
      return campuses.filter(campus =>
        campus.id !== action.id);

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

export const removeCampus = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/campuses/${id}`)
    .then(res => res.data)
    .catch(err => console.error('Error removeCampus', err));
};
