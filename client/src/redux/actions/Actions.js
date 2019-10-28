import axios from 'axios';

export default class Actions {
  constructor(partNum){
    switch (partNum){
      case 'part_one':
        this.partNum = 'ONE';
        this.urlEndpoint = '/api/v1/part_one';
        break;
      case 'part_two':
        this.partNum = 'TWO';
        this.urlEndpoint = '/api/v1/part_two';
        break;
      default:
        this.partNum = 'ONE';
        this.urlEndpoint = '/api/v1/part_one';
    }
    // api host
    if(process.env.NODE_ENV !== 'production'){
      this.apiHost = 'http://localhost:4001';
    }else{
      this.apiHost = process.env.API_HOST;
    }

  }

  loading () {
    return {
      type: `PART_${this.partNum}_LOADING`,
      payload: true
    };
  }

  updateInput (input) {
		return {
      type: `PART_${this.partNum}_UPDATE_INPUT`,
      payload: String(input)
    };	
  }

  fetchResult (instructions) {
    console.log('actions instructions: ', instructions);
    console.log('actions instructions.length: ', instructions.length);
    return dispatch => {
      dispatch(this.loading());
  	  axios.post(`${this.apiHost}${this.urlEndpoint}`, {data: {instructions}})
    		.then((res) => {
    			console.log('res.data: ', res.data);
    		})
    		.catch((err) => {
    			dispatch({type:`PART_${this.partNum}_ERR`, payload:err.message});
    		});

      setTimeout(() => {
        dispatch({type:`PART_${this.partNum}_FETCH`, payload:instructions + 'Simon'});
      }, 3000);
    };
  };

}
