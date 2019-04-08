import axios from "axios";
import { GET_TRANSACTIONS, TRANSACTIONS_LOADING } from "./types";

// Get Transactions
export const getTransactions = plaidData => dispatch => {
  dispatch(setTransactionsLoading());
  axios
    .post("/api/plaid/accounts/transactions", plaidData)
    .then(res =>
      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TRANSACTIONS,
        payload: null
      })
    );
};

// Transactions loading
export const setTransactionsLoading = () => {
  return {
    type: TRANSACTIONS_LOADING
  };
};
