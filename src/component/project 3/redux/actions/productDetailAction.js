function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "Get_PRODUCT_DETAIL", payload: id });
  };
}

export const productDetailAction = { getProductDetail };
