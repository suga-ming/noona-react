let initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log("action", action);
  if (action.type === "INCREASEMENT") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "DECREASEMENT") {
    return { ...state, count: state.count - 1 };
  }
  return { ...state };
}

export default reducer;
