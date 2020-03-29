import { getType } from "typesafe-actions";
import * as actions from "./actions";
import { CounterState, CounterAction } from "./types";

const initialState: CounterState = {
  value: 0,
  counterChanges: 0
};
export default (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case getType(actions.increaseCounter):
      return { ...state, value: state.value + 1 };
    case getType(actions.decreaseCounter):
      return { ...state, value: state.value - 1};
    default:
      return state;
  }
};
