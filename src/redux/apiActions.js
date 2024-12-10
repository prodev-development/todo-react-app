import axios from "axios";

const apiActions = (startAction, successAction, errorAction, params) => {
  return async (dispatch) => {
    console.log("apiActions", params);
    dispatch({ type: startAction });
    try {
      const response = await axios(params);
      dispatch({ type: successAction, payload: response.data });
    } catch (error) {
      dispatch({ type: errorAction, error });
    }
  };
};

export default apiActions;
