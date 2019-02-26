import * as todolistActions from '../actions/todolist'

const initialState = {
    todolist: [],
    show_outdated: false,
    notice: '',
    loading: false,
    err: null
};

const todolistReducer = (state = initialState, action) => {
    switch (action.type) {
        case todolistActions.TODO_LIST:
            return {
                ...state,
                loading: action.loading
            };
        case todolistActions.TODO_LIST_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                todolist: [ ...action.data ],
                notice: action.notice,
                show_outdated: action.show_outdated,
                err: null
            };
        case todolistActions.TODO_LIST_FAILURE:
            return {
                ...state,
                loading: action.loading,
                notice: action.notice,
                err: action.err
            };

        case todolistActions.TODAYS_TODO_LIST:
            return {
                ...state,
                loading: action.loading
            };
        case todolistActions.TODAYS_TODO_LIST_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                todolist: [ ...action.data ],
                notice: action.notice,
                show_outdated: action.show_outdated,
                err: null
            };
        case todolistActions.TODAYS_TODO_LIST_FAILURE:
            return {
                ...state,
                loading: action.loading,
                notice: action.notice,
                err: action.err
            };

        default:
            return state;
    }
};

export default todolistReducer;