export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const FILTER_CHANGED = 'FILTER_CHANGED';

export const FETCH_TODOS_LOADING = 'FETCH_TODOS_LOADING';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
  id: guid()
})
export const toggle = (id) => ({
  type: TOGGLE_TODO,
  id
});
export const remove = (id) => ({
  type: REMOVE_TODO,
  id
});
export const filterChanged = (text) => ({
  type: FILTER_CHANGED,
  filter: text
});

const loadingTodos = () => ({
  type: FETCH_TODOS_LOADING
});
const errorTodos = () => ({
  type: FETCH_TODOS_ERROR
});
const loadedTodos = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  todos
});

export const load = () => {
  return (dispatch) => {
    dispatch(loadingTodos());
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => todos.map(t => ({
        id: t.id,
        text: t.title,
        done: t.completed
      })))
      .then(todos => dispatch(loadedTodos(todos)))
      .catch(e => dispatch(errorTodos()));
  }
}