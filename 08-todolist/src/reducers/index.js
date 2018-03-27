import { combineReducers } from 'redux';
import { todos } from './todos';
import { filter } from './filter';
import { status } from './status';

const reducer = combineReducers({ todos, filter, status });

export default reducer;