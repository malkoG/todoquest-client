import * as authActions from '../actions/auth'

const authToken = JSON.parse(localStorage.getItem('todoquest/auth')) || [];

const initialState = {
    access_token: authToken.access_token,
    refresh: authToken.refresh,
    loading: false,
    err: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActions.LOGIN_USER:
            return {
                ...state,
                loading: action.loading
            };
        case authActions.LOGIN_SUCCESS:
            return {
                loading: action.loading,
                access_token: action.data.access_token,
                refresh: action.data.refresh,
                err: null
            };
        case authActions.LOGIN_FAILURE:
            return {
                ...state,
                loading: action.loading,
                err: action.err
            };
        case authActions.LOGOUT_USER:
            return {
                ...state,
                loading: action.loading
            };
        case authActions.LOGOUT_SUCCESS:
            return {
                loading: action.loading,
                refresh: null,
                access_token: null,
                err: null
            };
        case authActions.LOGIN_FAILURE:
            return {
                ...state,
                loading: action.loading,
                err: action.err
            };
        default:
            return state;
    }
};

export default authReducer;