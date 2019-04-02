import { GET_TRANSACTIONS, TRANSACTIONS_LOADING } from "../actions/types";

const initialState = {
  transactions: [],
  transactionsLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TRANSACTIONS_LOADING:
      return {
        ...state,
        transactionsLoading: true
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        transactionsLoading: false
      };
    default:
      return state;
  }
}
