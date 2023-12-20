import PropTypes from "prop-types";

function CalorieDifference(props) {
  //if negative, then the user will need to consume more calories to meet their surplus.
  //if positive, then the will already have met their surplus goal.

  return (
    <div className="border border-purple-500">
      <p>Calorie Difference: {Math.abs(props.calorieDifference)}</p>
      {props.calorieDifference > 0 ? (
        <p id="differenceMsg" className="hidden">
          You are in a surplus and have passed your calorie goal by{" "}
          {props.calorieDifference} calories
        </p>
      ) : (
        <p id="differenceMsg" className="hidden">
          You are in a deficit and need to consume{" "}
          {Math.abs(props.calorieDifference)} calories to meet your calorie goal
        </p>
      )}
    </div>
  );
}

CalorieDifference.propTypes = {
  calorieDifference: PropTypes.number,
};

export default CalorieDifference;
