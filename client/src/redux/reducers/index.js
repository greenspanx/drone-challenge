import { combineReducers } from 'redux';
import PartOneReducer from './PartOneReducer';
import PartTwoReducer from './PartTwoReducer';

const appReducer = combineReducers({
  partOne: PartOneReducer,
  partTwo: PartTwoReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
