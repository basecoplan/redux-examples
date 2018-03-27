import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  todos: [
    { id: 1, text: 'Read article', done: true },
    { id: 2, text: 'Write letter', done: false },
    { id: 3, text: 'Change passport', done: false },
    { id: 4, text: 'Order pizza', done: false },
  ], 
  filter: ''
};
const store = createStore(reducer, initialState);

export default store;
