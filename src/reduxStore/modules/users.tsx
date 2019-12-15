import axios from "axios";
import get from "lodash/get";
import { toast } from "react-toastify";
import { setLoading, unknownError } from "../actions";

const GET_USERS = "GET_USERS";
const GET_USERS_ERROR = "GET_USERS_ERROR";

const initState: any[] = [];

const getUsersUrl = `/users`;

const getUsers = () => {
  // make async call to DB
  return (dispatch: any, getState: any) => {
    dispatch(setLoading(true));

    axios({
      method: "get",
      url: `${getUsersUrl}`
    })
      .then(res => {
        dispatch({
          type: GET_USERS,
          users: res.data
        });

        dispatch(setLoading(false));
      })
      .catch(err => {
        const error = get(err, ["response", "data"]);
        if (error) {
          dispatch({
            type: GET_USERS_ERROR,
            error
          });
        } else {
          dispatch(unknownError());
          toast.error(`404: Unknown error}`);
        }

        dispatch(setLoading(false));
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
