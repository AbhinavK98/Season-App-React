import React from "react";
//import ReactDOM from "react-dom";
import "./SeasonDisplay.css";

//So here we have used ES2015 concept of defining variable object

const seasonConfig = {
  summer: {
    Text: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    Text: "Burrr it's cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  //!Refactoring this using season config
  //Here we are using ternary operator to use the condition
  // const Text =
  //   season === "winter" ? "Burrrr! its Chilly" : "Lets hit the beach";

  // const icon = season === "winter" ? "snowflake" : "sun";
  // we can write the same in JSX it depends if we want to assign it into variable and use it or use it directly into jsx

  const { Text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} massive icon`} />
      <h1>{Text}</h1>
      <i className={`icon-right ${iconName} massive icon`} />
    </div>
  );
};

export default SeasonDisplay;
