let initialState = {};

function productDetailReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case Get_PRODUCT_DETAIL:
      return { ...state };
  }
}
