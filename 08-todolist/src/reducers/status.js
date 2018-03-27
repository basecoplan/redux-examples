import { FETCH_TODOS_ERROR, FETCH_TODOS_LOADING, FETCH_TODOS_SUCCESS } from '../action';

const status = (state = [], action) => {
  switch(action.type) {
    case FETCH_TODOS_ERROR:
      return 'error';
    case FETCH_TODOS_LOADING:
      return 'loading';
    case FETCH_TODOS_SUCCESS:
      return 'success';
    default:
      return state;
  }
}

export { status };