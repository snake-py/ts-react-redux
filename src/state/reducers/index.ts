import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

const reducer = combineReducers({
    bank: bankReducer,
});
export default reducer;