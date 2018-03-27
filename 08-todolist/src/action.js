export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const FILTER_CHANGED = 'FILTER_CHANGED';

export const addTodo = (text) => ({ type: ADD_TODO, text, id: Date.now()})
export const toggle = (id) => ({ type: TOGGLE_TODO, id });
export const remove = (id) => ({ type: REMOVE_TODO, id });
export const filterChanged = (text) => ({type: FILTER_CHANGED, filter: text});

