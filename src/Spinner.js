import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">{props.message}</div>
    </div>
  );
};

//If we do not pass any message in props then it will load this by default props also this can be written like:  <div className="ui massive text loader">{props.message || Cat Stream loading...}</div>
Spinner.defaultProps = {
  message: "Cat Stream loading...",
};

export default Spinner;
