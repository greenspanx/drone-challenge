import { types } from '../actions/ActionTypes';

export default function PartTwoReducer(state = {
  instructions: 'xx^^vv>><<x',
  message: '',
  execution: true,
  singleShots: '2',
  loadingIns: false
}, action) {
  const newState = {...state};
  switch (action.type) {
    case types.PART_TWO_UPDATE_INPUT:
      return {
        ...state,
        instructions: action.payload
      };
    case types.PART_TWO_LOADING:
      return {
        ...state,
        loadingIns: action.payload
      };
    case types.PART_TWO_FETCH:
      return {
        ...state,
        loadingIns: false,
        singleShots: action.payload
      };
    case types.PART_TWO_ERR:
      return {
        ...state,
        message: action.payload
      };
    default:
      return newState;
  }
}
