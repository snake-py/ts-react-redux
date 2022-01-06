import React from 'react'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from './state'
import { useSelector,  useDispatch} from './state/store'


export default function App() {
    const balance = useSelector((state: State) => state.bank.balance)
    const dispatch = useDispatch()
    const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch)
    
    console.log(actionCreators);
    return (
        <div>
            <h1>{balance}</h1>
            <button onClick={() => depositMoney(10)}>Deposit</button>
            <button onClick={() => withdrawMoney(10)}>Withdraw</button>
            <button onClick={() => bankrupt()}>Bankrupt</button>
        </div>
    )
}
