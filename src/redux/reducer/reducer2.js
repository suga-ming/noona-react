let initialState = {
  count: 0,
};

function reducer2(state = initialState, action) {
  console.log(action);
  if (action.type === "INCREASEMENT") {
    return { ...state, count: state.count + 1 };
  }
  return { ...state };
}

export default reducer2;
