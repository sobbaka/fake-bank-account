import { useReducer } from 'react'
import Controls from './Controls';
import Balance from './Balance';

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'open':
      return { ...state, isActive: true }
    case 'deposit':
      return { ...state, balance: state.balance + action.payload }
    case 'withdraw':
      return { ...state, balance: (state.balance - action.payload) >= 0 ? state.balance - action.payload : state.balance }
    case 'requestLoan':
      return { ...state, balance: state.loan === 0 ? state.balance + action.payload : state.balance, loan: state.loan === 0 ? action.payload : state.loan }
    case 'payLoan':
      return { ...state, balance: state.loan > 0 && state.balance >= action.payload ? state.balance - state.loan : state.balance, loan: state.loan > 0 && state.balance >= action.payload ? 0 : state.loan }
    case 'close':
      return { ...state, isActive: !state.balance && !state.loan ? false : true }
    default:
      throw new Error("Action uknown")
  }
}


function App() {

  const [{ balance, loan, isActive }, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="container">
      <h1 className='text-center'>useReducer Bank Account</h1>
      <Balance balance={balance} loan={loan} />
      <Controls isActive={isActive} dispatch={dispatch} />
    </div>
  )
}

export default App
