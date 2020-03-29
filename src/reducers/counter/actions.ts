import { createAction } from "typesafe-actions";

export const increaseCounter = createAction(
  "counter/INCREASE_COUNTER"
)();
export const decreaseCounter = createAction(
  "counter/DECREASE_COUNTER"
)();

