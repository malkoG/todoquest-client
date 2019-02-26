const PREFIX = 'TODO';

export const TODO_LIST = `${PREFIX}/TODO_LIST`;
export const TODO_LIST_SUCCESS = `${PREFIX}/TODO_LIST_SUCCESS`;
export const TODO_LIST_FAILURE = `${PREFIX}/TODO_LIST_FAILURE`;

export const TODAYS_TODO_LIST = `${PREFIX}/TODAYS_TODO_LIST`;
export const TODAYS_TODO_LIST_SUCCESS = `${PREFIX}/TODAYS_TODO_LIST_SUCCESS`;
export const TODAYS_TODO_LIST_FAILURE = `${PREFIX}/TODAYS_TODO_LIST_FAILURE`;

export function todolist() {
    return {
        type: TODO_LIST,
        loading: true,
    }
}

export function todolistSuccess(data) {
    return {
        type: TODO_LIST_SUCCESS,
        loading: false,
        notice: '할 일 목록을 불러오는데 성공했습니다.',
        show_outdated: false,
        data
    }
}

export function todolistFailure(err) {
    return {
        type: TODO_LIST_FAILURE,
        loading: false,
        notice: '할 일 목록을 불러오는데 실패했습니다.',
        err
    }
}

export function todaysTodolist() {
    return {
        type: TODAYS_TODO_LIST,
        loading: true
    }
}

export function todaysTodolistSuccess(data) {
    return {
        type: TODAYS_TODO_LIST_SUCCESS,
        loading: false,
        show_outdated: true,
        notice: '오늘의 할 일 목록을 불러오는데 성공했습니다.',
        data
    }
}

export function todaysTodolistFailure(err) {
    return {
        type: TODAYS_TODO_LIST_FAILURE,
        loading: false,
        notice: '오늘의 할 일 목록을 불러오는데 실패했습니다.',
        err
    }
}