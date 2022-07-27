import { combineReducers } from "redux";
import todoreduce from "./todo/todo-reduce";
export default combineReducers({ todoState: todoreduce });
