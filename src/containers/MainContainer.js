import React from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../actions";

const mapStateToProps = state => {
  console.log(state);
  return {
    count: state.counter.count
  };
};

const MainContainer = props => {
  console.log(props);
  const { count, dispatch } = props;

  const increment = () => {
    dispatch(incrementCount(1));
  };

  const decrement = () => {
    dispatch(decrementCount(1));
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(MainContainer);
