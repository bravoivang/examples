import { createStore, combineReducers } from 'redux';
import { tradeReducer } from '../Containers/Trader/reducer';

const rootReducer = combineReducers({tradeReducer});
const store = createStore(
  rootReducer
)

export default store;
