import { legacy_createStore as createStore } from "redux";
import reducer2 from "./reducer/reducer2";

let store = createStore(reducer2);

export default store;
