import React from 'react';
import {BasicForm} from './BasicForm';
import {connect} from 'react-redux';
import Actions from "../redux/actions/Actions";
const partTwoActions = new Actions('part_two');

export function PartTwo (props) {
  console.log('PartTwo partOne.instructions:', props.instructions);
  console.log('PartTwo partOne.singleShots:', props.singleShots);

  return (
    <React.Fragment>
      <BasicForm
        title={'Part Two'}
        label={'Part 2 Instructions'}
        {...props}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    instructions: state.partTwo.instructions,
    message: state.partTwo.message,
    execution: state.partTwo.execution,
    singleShots: state.partTwo.singleShots,
    loadingIns: state.partTwo.loadingIns
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateInput: (e) => dispatch(partTwoActions.updateInput(e)),
    fetchResult: (e, val) => dispatch(partTwoActions.fetchResult(e, val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PartTwo);
