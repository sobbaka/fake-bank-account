function Balance({ balance, loan }) {
    return (
        <div className="">
            <p className="h4 text-center">Balance: {balance}</p>
            <p className="h4 text-center">Loan: {loan} </p>
        </div>
    )
}

export default Balance