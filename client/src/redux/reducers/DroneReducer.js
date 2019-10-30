import { types } from '../actions/ActionTypes';

export default function PartOneReducer(state = {
  tab_selector: 'input', // 'input'  or 'upload'
  instructions: '',
  drone_counts: '',
  message: '',
  execution: true,
  singleShots: '',
  loading: false
}, action) {
  const newState = {...state};
  switch (action.type) {
    case types.SELECT_TAB:
      return {
        ...state,
        instructions: '',
        tab_selector: action.payload
      };
    case types.UPDATE_INPUT:
      return {
        ...state,
        message: '',
        instructions: action.payload
      };
    case types.UPDATE_COUNTS:
      return {
        ...state,
        drone_counts: action.payload
      };
    case types.LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.FETCH:
      return {
        ...state,
        loading: false,
        singleShots: action.payload
      };
    case types.ERR:
      return {
        ...state,
        message: action.payload
      };
    case types.EXECUTION:
      return {
        ...state,
        execution: action.payload
      };
    default:
      return newState;
  }
}
