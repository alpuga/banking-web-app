import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import accountReducer from "./accountReducer";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  plaid: accountReducer,
  transactions: transactionReducer
});
