export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";

export const incrementCount = payload => {
  return { type: INCREMENT_COUNT, payload: payload };
};

export const decrementCount = payload => {
  return { type: DECREMENT_COUNT, payload: payload };
};
