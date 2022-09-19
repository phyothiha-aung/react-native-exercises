import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const configureStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
export default configureStore;
