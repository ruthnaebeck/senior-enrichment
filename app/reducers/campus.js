import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET_CAMPUS = 'GET_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

const getCampus = campus => ({ type: GET_CAMPUS, campus });


/* ------------       REDUCERS     ------------------ */

export default function reducer(campus = {}, action) {
  switch (action.type) {
    case GET_CAMPUS:
      return action.campus;

    default:
      return campus;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchCampus = (id) => dispatch => {
  axios.get(`/api/campus/${id}`)
  .then(res => {
    dispatch(getCampus(res.data));
  })
  .catch(err => console.error(err));
};
