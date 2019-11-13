import React from "react";

import { useDispatch } from "react-redux";
import { getExchanges } from "../actions";

const Button = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(getExchanges())}>Show</button>;
};

export default Button;
