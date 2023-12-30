function Button({ name, dispatch, isActive, actionType, payload }) {
    return (
        <button className={`btn btn-primary mt-2 custom__btn ${!isActive && ' disabled'}`} onClick={() => dispatch({ type: actionType, payload: payload })}>
            {name}
        </button >
    )
}

export default Button