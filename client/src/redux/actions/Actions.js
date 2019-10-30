import axios from 'axios';
// import store from '../store';
import { types } from '../actions/ActionTypes';

export default class Actions {
  constructor(urlEndpoint=''){
    this.urlEndpoint = urlEndpoint;
    // api host
    if(process.env.NODE_ENV !== 'production'){
      this.apiHost = 'http://localhost:4001';
    }else{
      this.apiHost = process.env.API_HOST;
    }
  }

  loading () {
    return {
      type: types.LOADING,
      payload: true
    };
  }

  handleTabChange (val) {
    return {
      type: types.SELECT_TAB,
      payload: val
    };
  }

  updateExecution (ts) {
    return {
      type: types.EXECUTION,
      payload: ts
    };
  }

  updateInput (input) {
		return {
      type: types.UPDATE_INPUT,
      payload: String(input)
    };
  }

  updateDroneCounts (counts) {
    return {
      type: types.UPDATE_COUNTS,
      payload: String(counts)
    };
  }

  fetchResult (instructions, drone_counts) {
    console.log('actions instructions: ', instructions);
    console.log('actions drone_counts: ', drone_counts);
    console.log('actions instructions.length: ', instructions.length);
    return dispatch => {
      dispatch(this.loading());

      // axios.get does not have req.body; req.body: {instructions, drone_counts}
  	  axios.post(`${this.apiHost}${this.urlEndpoint}`, {instructions, drone_counts})
    		.then((res) => {
    			// console.log('res.data: ', res.data);
          dispatch({type: types.FETCH, payload: res.data.uniqueShots});
    		})
    		.catch((err) => {
    			dispatch({type: types.ERR, payload: err.message});
    		});
    };
  };

}
