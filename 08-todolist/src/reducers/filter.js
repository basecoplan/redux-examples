import { FILTER_CHANGED } from '../action';

const filter = (state = '', action) => {
  if (action.type === FILTER_CHANGED)
    return action.filter;
  return state;
}

export { filter };