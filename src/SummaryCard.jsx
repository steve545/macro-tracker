import PropTypes from "prop-types";
import React from "react";

function SummaryCard(props) {
  return (
    <div>
      Summary Card
      <p>calories burned: {props.caloriesBurned}</p>
      <p>Resting Heart Rate: {props.restingHeartRate}</p>
    </div>
  );
}
SummaryCard.propTypes = {
  caloriesBurned: PropTypes.string,
  restingHeartRate: PropTypes.number,
};

export default SummaryCard;
