import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import userReducer from './users';
import todoReducer from './todo';
import authReducer from './auth';
import todolistReducer from './todolist';

export const reducers = combineReducers({
    routing: routerReducer,
//    userReducer,
    todoReducer,
    authReducer,
    todolistReducer,
});