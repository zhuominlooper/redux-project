import { compose,applyMiddleware } from "redux";
import reducers from "./reducers";
import  thunk  from "redux-thunk";
import { createStore } from "../libs/redux/redux";
const store=  createStore(reducers)
export default store