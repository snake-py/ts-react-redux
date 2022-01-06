import React from 'react'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state'
import { useSelector,  useDispatch} from './state/store'


// import { useDispatch } from 'react-redux'

export default function App() {
    const balance = useSelector(state => state.bank.balance)
    const dispatch = useDispatch()
    // const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch)
    
    console.log(actionCreators);
    return (
        <div>
            <h1>balance</h1>
            {/* <button onClick={() => depositMoney(10)}>Deposit</button> */}
            <button>Withdraw</button>
            <button>Bankrupt</button>
        </div>
    )
}
