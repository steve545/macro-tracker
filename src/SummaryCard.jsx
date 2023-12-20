import PropTypes from "prop-types";

function SummaryCard(props) {
  return (
    <div className="border border-black ">
      Summary Card
      <p>Calories Burned: {props.caloriesBurned}</p>
      <p>Resting Heart Rate: {props.restingHeartRate}</p>
      <p>Calorie Goal: {props.calorieGoal}</p>
      <p>Calories Consumed: {props.caloriesConsumed || 0}</p>
      <p>Calories Away From Goal: {Math.abs(props.calorieDifference)}</p>
    </div>
  );
}
SummaryCard.propTypes = {
  caloriesBurned: PropTypes.number,
  restingHeartRate: PropTypes.number,
  calorieGoal: PropTypes.number,
  calorieDifference: PropTypes.number,
  caloriesConsumed: PropTypes.number,
};

export default SummaryCard;
