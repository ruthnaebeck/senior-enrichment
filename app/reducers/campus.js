import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';


/* ------------   ACTION CREATORS     ------------------ */

const getCampuses = campuses => ({ type: GET_CAMPUSES, campuses });


/* ------------       REDUCERS     ------------------ */

export default function reducer(campuses = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

    default:
      return campuses;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
       .then(res => {
         dispatch(getCampuses(res.data));
       })
       .catch(err => console.error(err));
};
