const PREFIX = 'TODO';

export const SHOW_TODO = `${PREFIX}/SHOW_TODO`;
export const SHOW_TODO_SUCCESS = `${PREFIX}/SHOW_TODO_SUCCESS`;
export const SHOW_TODO_FAILURE = `${PREFIX}/SHOW_TODO_FAILURE`;

export const ADD_TODO = `${PREFIX}/ADD_TODO`;
export const ADD_TODO_SUCCESS = `${PREFIX}/ADD_TODO_SUCCESS`;
export const ADD_TODO_FAILURE = `${PREFIX}/ADD_TODO_FAILURE`;

export const DELETE_TODO = `${PREFIX}/DELETE_TODO`;
export const DELETE_TODO_SUCCESS = `${PREFIX}/DELETE_TODO_SUCCESS`;
export const DELETE_TODO_FAILURE = `${PREFIX}/DELETE_TODO_FAILURE`;

export const EDIT_TODO = `${PREFIX}/EDIT_TODO`;
export const EDIT_TODO_SUCCESS = `${PREFIX}/EDIT_TODO_SUCCESS`;
export const EDIT_TODO_FAILURE = `${PREFIX}/EDIT_TODO_FAILURE`;

export const COMPLETE_TODO = `${PREFIX}/COMPLETE_TODO`;
export const COMPLETE_TODO_SUCCESS = `${PREFIX}/COMPLETE_TODO_SUCCESS`;
export const COMPLETE_TODO_FAILURE = `${PREFIX}/COMPLETE_TODO_FAILURE`;

export const INCOMPLETE_TODO = `${PREFIX}/INCOMPLETE_TODO`;
export const INCOMPLETE_TODO_SUCCESS = `${PREFIX}/INCOMPLETE_TODO_SUCCESS`;
export const INCOMPLETE_TODO_FAILURE = `${PREFIX}/INCOMPLETE_TODO_FAILURE`;

export function showTodo() {
    return {
        type: SHOW_TODO,
        loading: true
    }
}

export function showTodoSuccess(data) {
    return {
        type: SHOW_TODO_SUCCESS,
        loading: false,
        notice: '불러오는 데 성공했습니다.',
        data
    }
}

export function showTodoFailure(err) {
    return {
        type: SHOW_TODO_FAILURE,
        loading: false,
        notice: '불러오는 데 실패했습니다.',
        err
    }
}

export function addTodo() {
    return {
        type: ADD_TODO,
        loading: true
    }
}

export function addTodoSuccess() {
    return {
        type: ADD_TODO_SUCCESS,
        loading: true,
        notice: '등록하는 데 성공했습니다.'
    }
}

export function addTodoFailure(err) {
    return {
        type: ADD_TODO_FAILURE,
        loading: false,
        notice: '등록하는 데 실패했습니다.',
        err
    }
}

export function deleteTodo() {
    return {
        type: DELETE_TODO,
        loading: false,
    }
}

export function deleteTodoSuccess() {
    return {
        type: DELETE_TODO_SUCCESS,
        loading: true,
        notice: '삭제하는 데 성공했습니다.'
    }
}

export function deleteTodoFailure(err) {
    return {
        type: DELETE_TODO_FAILURE,
        loading: false,
        notice: '삭제하는 데 실패했습니다.',
        err
    }
}

export function editTodo(data) {
    return {
        type: EDIT_TODO,
        loading: true,
        data
    }
}

export function editTodoSuccess(data) {
    return {
        type: EDIT_TODO_SUCCESS,
        loading: false,
        notice: '편집하는 데 성공했습니다.',
        data
    }
}

export function editTodoFailure(data, err) {
    return {
        type: EDIT_TODO,
        loading: false,
        notice: '편집하는 데 실패했습니다.',
        data,
        err
    }
}

export function completeTodo() {
    return {
        type: COMPLETE_TODO,
        loading: true
    }
}

export function completeTodoSuccess() {
    return {
        type: COMPLETE_TODO_SUCCESS,
        loading: false,
        notice: '완료 처리에 성공했습니다.'
    }
}

export function completeTodoFailure(err) {
    return {
        type: COMPLETE_TODO_FAILURE,
        loading: false,
        notice: '완료 처리에 실패했습니다.',
        err
    }
}

export function incompleteTodo() {
    return {
        type: INCOMPLETE_TODO,
        loading: true,
    }
}

export function incompleteTodoSuccess() {
    return {
        type: INCOMPLETE_TODO_SUCCESS,
        loading: false,
        notice: '미완료 처리에 성공했습니다.'
    }
}

export function incompleteTodoFailure(err) {
    return {
        type: INCOMPLETE_TODO,
        loading: true,
        notice: '미완료 처리에 실패했습니다.',
        err
    }
}