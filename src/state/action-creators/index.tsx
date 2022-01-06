import { ActionTypes } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export const depositMoney = (amount: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.DEPOSIT,
    payload: amount,
  });
};

export const withdrawMoney = (amount: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.WITHDRAW,
    payload: amount,
  });
};

export const bankrupt = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.BANKRUPT,
    // payload: amount, // Ts is not catching this
  });
};

// second way to write 
// const depostitMoney = (amount) => {
//   return (dispatch) => {
//     dispatch({
//       type: ActionTypes.DEPOSIT,
//       payload: amount,
//     });
//   };
// };
