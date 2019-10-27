//import ApiPost from '../../api'; xxx
import Config from '../../config';
import axios from 'axios';

export default class Actions {
  constructor(partNum){
    switch (partNum){
      case 'part_one':
        this.partNum = 'ONE';
        break;
      case 'part_two':
        this.partNum = 'TWO';
        break;
      default:
        this.partNum = 'ONE';
    }
  }

  loading () {
    return {
      type: `PART_${this.partNum}_LOADING`,
      payload: true
    };
  }

  updateInput (input) {
	const inputRegEx = /^[x<>v\^]*$/;
	if(input.match(inputRegEx)){
		return {
            type: `PART_${this.partNum}_UPDATE_INPUT`,
            payload: String(input)
        };		
	}	
	
    return {
        type: `PART_${this.partNum}_ERR`,
        payload: 'Invalid Input, Must Be: x, <, >, ^, v'
    };
  }

  fetchResult (instructions) {
    console.log('instructions: ', instructions);
    console.log('instructions.length: ', instructions.length);
    return dispatch => {
      dispatch(this.loading());
	  axios.post(url, instructions)
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
