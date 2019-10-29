const INITIAL_STATE = {
    todoInput : '',
    todoDateCreated : '',
    todoDateCompleted : '',
    todoData : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TODO_INPUT':
            return {...state, todoInput : action.payload}
        default:
            return state
    }
}