import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `http://localhost:3004/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    dispatch(productActions.getAllProducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // dispatch({ type: "Get_PRODUCT_DETAIL", payload: { data } });
    dispatch(productActions.getSingleProduct({ data }));
  };
}

export const productAction = { getProducts, getProductDetail };
