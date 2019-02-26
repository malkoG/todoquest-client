import * as todoActions from '../actions/todo'

const initialState = {
    todo: {},
    notice: '',
    loading: false,
    err: null
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
      // SHOW
      case todoActions.SHOW_TODO:
          return {
              ...state,
              loading: action.loading
          };
      case todoActions.SHOW_TODO_SUCCESS:
          return {
              ...state,
              loading: action.loading,
              notice: action.notice,
              todo: { ...action.data },
              err: null
          };
      case todoActions.SHOW_TODO_FAILURE:
          return {
              ...state,
              loading: action.loading,
              notice: action.notice,
              err: action.err
          };

      // ADD
      case todoActions.ADD_TODO:
          return {
              ...state,
              loading: action.loading
          };
      case todoActions.ADD_TODO_SUCCESS:
          return {
              ...state,
              loading: action.loading,
              notice: action.notice,
              err: null
          };
      case todoActions.ADD_TODO_FAILURE:
          return {
              ...state,
              loading: action.loading,
              notice: action.notice,
              err: action.err
          };

      // EDIT
      case todoActions.EDIT_TODO:
          return {
              ...state,
              loading: action.loading,
              todo: { ...action.data }
          };
      case todoActions.EDIT_TODO_SUCCESS:
          return {
              ...state,
              loading: action.loading,
              notice: action.notice,
              todo: { ...action.data },
              err: null
          };
      case todoActions.EDIT_TODO_FAILURE:
          return {
              ...state,
              loading: action.loading,
              notice: action.notice,
              todo: { ...action.data },
              err: action.err
          };

      // COMPLETE
      case todoActions.COMPLETE_TODO:
          return {
              ...state,
              loading: action.loading
          };
      case todoActions.COMPLETE_TODO_SUCCESS:
          return {
              ...state,
              loading: action.loading,
              notice: action.notice,
              err: null
          };
      case todoActions.COMPLETE_TODO_FAILURE:
          return {
              ...state,
              loading: action.loading,
              notice: action.notice,
              err: action.err
          };

      // INCOMPLETE
      case todoActions.INCOMPLETE_TODO:
          return {
              ...state,
              loading: action.loading,
          };
      case todoActions.INCOMPLETE_TODO_SUCCESS:
          return {
              ...state,
              loading: action.loading,
              notice: action.notice,
              err: null
          };
      case todoActions.INCOMPLETE_TODO_FAILURE:
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

export default todoReducer;