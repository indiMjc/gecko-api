import { GET_EXCHANGES, LOADING_SUCCESS, LOADING_FAILED } from "../actions";

const initialState = {
  exchanges: {},
  error: null,
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXCHANGES:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case LOADING_SUCCESS:
      return {
        ...state,
        exchanges: action.payload,
        error: null,
        isFetching: false
      };
    case LOADING_FAILED:
      return {
        ...state,
        exchanges: [],
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default reducer;
