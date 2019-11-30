import axios from "axios";
import get from "lodash/get";

const GET_USERS = "GET_USERS";
const GET_USERS_ERROR = "GET_USERS_ERROR";

const initState: any[] = [];

const getUsersUrl = `/users`;

const getUsers = () => {
  // make async call to DB
  return (dispatch: any, getState: any) => {
    dispatch({ type: "SET_LOADING", loading: true });

    axios({
      method: "get",
      url: `${getUsersUrl}`
    })
      .then(res => {
        dispatch({
          type: GET_USERS,
          users: res.data
        });

        dispatch({ type: "SET_LOADING", loading: false });
      })
      .catch(err => {
        const error = get(err, ["response", "data"]);
        if (error) {
          dispatch({
            type: GET_USERS_ERROR,
            error
          });
        } else {
          dispatch({
            type: "UNKNOWN_ERROR",
            error: {
              error: "Unexpected",
              message: "Unknown error",
              status: 404
            }
          });
        }

        dispatch({ type: "SET_LOADING", loading: false });
      });
  };
};

const userRolesReducer = (state = initState, action: any = {}) => {
  switch (action.type) {
    case GET_USERS: {
      return [...action.users];
    }

    default: {
      return state;
    }
  }
};

export { getUsers, userRolesReducer };
