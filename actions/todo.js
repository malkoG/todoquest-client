const PREFIX = 'TODO';

export const ADD_TODO = `${PREFIX}/ADD_TODO`;
export const DELETE_TODO = `${PREFIX}/DELETE_TODO`;
export const SHOW_TODO = `${PREFIX}/SHOW_TODO`;
export const EDIT_TODO = `${PREFIX}/EDIT_TODO`;
export const CHECK_TODO = `${PREFIX}/CHECK_TODO`;
export const UNCHECK_TODO = `${PREFIX}/UNCHECK_TODO`;

export const TODO_LIST = `${PREFIX}/TODO_LIST`;
export const TODAYS_TODO_LIST = `${PREFIX}/TODAYS_TODO_LIST`;

export const ADD_TODO_FAILURE  = `${PREFIX}/ADD_TODO_FAILURE`;
export const EDIT_TODO_FAILURE = `${PREFIX}/EDIT_TODO_FAILURE`;


export function addTodo(todoId, data) {
    return {
        type: ADD_TODO,
        todoId,
        data
    }
}

export function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        todoId
    }
}

export function showTodo(todoId) {
    return {
        type: SHOW_TODO,
        todoId
    }
}

export function editTodo(todoId, data) {
    return {
        type: EDIT_TODO,
        todoId,
        data
    }
}

export function checkTodo(todoId) {
    return {
        type: CHECK_TODO,
        todoId
    }
}

export function uncheckTodo(todoId) {
    return {
        type: UNCHECK_TODO,
        todoId
    }
}

export function todoList() {
    return {
        type: TODO_LIST
    }
}

export function todaysTodoList() {
    return {
        type: TODAYS_TODO_LIST
    }
}

export function addTodoFailure(err) {
    return {
        type: ADD_TODO_FAILURE,
        err
    }
}

export function editTodoFailure(err) {
    return {
        type: EDIT_TODO_FAILURE,
        err
    }
}