import React from 'react';
import {BasicForm} from './BasicForm';
import {connect} from 'react-redux';
import Actions from "../redux/actions/Actions";

const partOneActions = new Actions('part_one');


export function PartOne (props) {
  console.log('PartOne partOne.instructions:', props.instructions);
  console.log('PartOne partOne.singleShots:', props.singleShots);

  return (
    <React.Fragment>
      <BasicForm
        title={'Part One'}
        label={'Part 1 Instructions'}
        {...props}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    instructions: state.partOne.instructions,
    message: state.partOne.message,
    execution: state.partOne.execution,
    singleShots: state.partOne.singleShots,
    loadingIns: state.partOne.loadingIns
  };
};

const mapDispachToProps = dispatch => {
  return {
    updateInput: (e) => dispatch(partOneActions.updateInput(e)),
    fetchResult: (e, val) => dispatch(partOneActions.fetchResult(e, val))
  };
};

export default connect(mapStateToProps, mapDispachToProps)(PartOne);
