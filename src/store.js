import { createStore } from "redux";

const initialState = { currentValue: 0 };
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { currentValue: state.currentValue + action.amount };
    case DECREMENT:
      return { currentValue: state.currentValue - action.amount };
    case RESET:
      return { currentValue: state.currentValue - state.currentValue };

    default:
      return state;
  }
}

export default createStore(counter);
