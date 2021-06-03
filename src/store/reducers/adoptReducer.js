const initialState = {
  error: null,
  loading: false,
  data: null,
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADOPT_START":
      return {
        ...state,
        loading: true,
      };

    case "ADOPT_END":
      return {
        ...state,
        loading: false,
      };

    case "ADOPT_SUCCESS":
      return {
        ...state,
        error: null,
        data: action.payload,
      };
    case "ADOPT_FAIL":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default actionReducer;
