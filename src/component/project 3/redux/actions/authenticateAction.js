import { authenticateActions } from "../reducers/authenticateReducer";

function login(id, password) {
  return (dispatch, getState) => {
    console.log("login success");
    // dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    dispatch(authenticateActions.getLogin({ id, password }));
  };
}

export const authenticateAction = { login };
