import { combineReducers } from 'redux';
import DroneReducer from './DroneReducer';

const appReducer = combineReducers({
  drone: DroneReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
