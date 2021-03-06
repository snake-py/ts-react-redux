import { Action } from '../actions';
import { ActionTypes } from '../action-types';


// defined in global scope see ./src/Reducer.d.ts
// interface IBankState {
//   balance: number;
// }

const initialState: IBankState = {
  balance: 0,
};

const bankReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case ActionTypes.WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case ActionTypes.BANKRUPT:
      return {
        ...state,
        balance: 0,
      };
    default:
      return state;
  }
};

export default bankReducer;
