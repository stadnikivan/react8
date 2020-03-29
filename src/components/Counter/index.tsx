import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { IRootState, IRootAction } from "../../reducers/rootReducer";
import * as actions from "../../reducers/counter/actions";

const mapStateToProps = (state: IRootState) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
  bindActionCreators(
    {
      increaseCounter: actions.increaseCounter,
      decreaseCounter: actions.decreaseCounter
    },
    dispatch
  );

type CounterProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Counter: React.FC<CounterProps> = props => {
  
  const increaseCounter = () => {
    props.increaseCounter();
  };

  const decreaseCounter = () => {
    props.decreaseCounter();
  }

  return (
    <div>
    <button onClick={increaseCounter}>IncreaseCounter</button>
    <button onClick={decreaseCounter}>DecreaseCounter</button>
    <p>Counter: {props.counter.value}</p>
    </div>
  ) 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Counter));