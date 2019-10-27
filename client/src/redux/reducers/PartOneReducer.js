import { types } from '../actions/ActionTypes';

export default function PartOneReducer(state = {
  instructions: '^^vv>><<x',
  message: '',
  execution: true,
  singleShots: '0',
  loadingIns: false
}, action) {
  const newState = {...state};
  switch (action.type) {
    case types.PART_ONE_UPDATE_INPUT:
      return {
        ...state,
        instructions: action.payload
      };
    case types.PART_ONE_LOADING:
      return {
        ...state,
        loadingIns: action.payload
      };
    case types.PART_ONE_FETCH:
      return {
        ...state,
        loadingIns: false,
        singleShots: action.payload
      };
    case types.PART_ONE_ERR:
      return {
        ...state,
        message: action.payload
      };
    default:
      return newState;
  }
}
