import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET = 'GET_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

const get = campus => ({ type: GET, campus });


/* ------------       REDUCERS     ------------------ */

export default function reducer(campus = { students: [] }, action) {
  switch (action.type) {
    case GET:
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
