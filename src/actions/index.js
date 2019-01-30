// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

import axios from "axios";

export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const getChars = () => dispatch => {
  dispatch({ type: "FETCHING_DATA" });
  axios
    .get("https://swapi.co/api/people/")
    .then(({ data }) => {
      dispatch({
        type: FETCHING_DATA_SUCCESS,
        payload: data.results
      });
    })
    .catch(err => dispatch({ type: FETCHING_DATA_FAILURE, payload: err }));
};
