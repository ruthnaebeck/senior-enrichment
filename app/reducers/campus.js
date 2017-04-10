import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET = 'GET_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

const get = campus => ({ type: GET, campus });
const update = campus => ({ type: UPDATE, campus });


/* ------------       REDUCERS     ------------------ */

export default function reducer(campus = { students: [] }, action) {
  switch (action.type) {
    case GET:
      return action.campus;
    case UPDATE:
      return action.campus;

    default:
      return campus;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchCampus = (id) => dispatch => {
  axios.get(`/api/campus/${id}`)
  .then(res => dispatch(get(res.data)))
  .catch(err => console.error('Error fetchCampus', err));
};

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campus/${id}`, campus)
  .then(res => dispatch(update(res.data)))
  .catch(err => console.error('Error updateCampus', err));
};
