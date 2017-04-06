import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

const getCampuses = campuses => ({ type: GET_CAMPUSES, campuses });
const getCampus = campus => ({ type: GET_CAMPUS, campus });


/* ------------       REDUCERS     ------------------ */

export default function reducer(campuses = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return action.campus;

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

export const fetchCampus = (id) => dispatch => {
  axios.get(`/api/campus/${id}`)
  .then(res => {
    dispatch(getCampus(res.data));
    // console.log('campus', res.data);
  })
  .catch(err => console.error(err));
};
