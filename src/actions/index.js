import axios from "axios";

export const GET_EXCHANGES = "GET_EXCHANGES";
export const LOADING_SUCCESS = "LOADING_SUCCESS";
export const LOADING_FAILED = "LOADING_FAILED";

export const exchLoading = () => ({ type: GET_EXCHANGES });

export const exchLoadingSuccess = data => ({
  type: LOADING_SUCCESS,
  payload: data
});

export const loadFail = err => ({
  type: LOADING_FAILED,
  payload: err
});

export const getExchanges = () => {
  return function(dispatch) {
    dispatch(exchLoading());

    return axios
      .get(`https://api.coingecko.com/api/v3/exchanges?per_page=10`)
      .then(res => {
        dispatch(exchLoadingSuccess(res.data));
      })
      .catch(err => dispatch(loadFail(err)));
  };
};
