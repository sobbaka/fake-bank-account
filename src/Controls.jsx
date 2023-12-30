import Button from "./Button"

function Controls({ isActive, dispatch }) {
    return (
        <div className="d-flex flex-column align-items-center">
            <Button name={'Open account'} dispatch={dispatch} isActive={!isActive} actionType={'open'} />
            <Button name={'Deposit 150'} dispatch={dispatch} isActive={isActive} actionType={'deposit'} payload={150} />
            <Button name={'Withdraw 50'} dispatch={dispatch} isActive={isActive} actionType={'withdraw'} payload={50} />
            <Button name={'Request a loan of 5000'} dispatch={dispatch} isActive={isActive} actionType={'requestLoan'} payload={5000} />
            <Button name={'Pay loan'} dispatch={dispatch} isActive={isActive} actionType={'payLoan'} payload={5000} />
            <Button name={'Close account'} dispatch={dispatch} isActive={isActive} actionType={'close'} />
        </div>
    )
}

export default Controls