import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialState = {
  todos: [ ], 
  filter: ''
};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
