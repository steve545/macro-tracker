import PropTypes from "prop-types";

function SummaryCard(props) {
  return (
    <div className="shadow-md shadow-black bg-[#2a2c36] rounded-xl text-slate-200 w-[500px] h-52 grid grid-rows-3 grid-cols-2 text-md p-3 gap-3">
      <p className="text-left p-2 flex items-center">
        <span className="font-regular pr-2">Calories Consumed: </span>
        {props.caloriesConsumed || 0}
      </p>
      <p className="text-left p-2 flex items-center">
        <span className="font-regular pr-2">Calories Burned: </span>
        {props.caloriesBurned}
      </p>
      <p className="text-left p-2 flex items-center">
        <span className="font-regular pr-2">Calorie Goal: </span>
        {props.calorieGoal}
      </p>
      <p className="text-left p-2 flex items-center">
        <span className="font-regular pr-2">Resting Heart Rate: </span>
        {props.restingHeartRate}
      </p>
      <p className="col-span-2 p-2 h-fit w-full m-auto ">
        <span className="font-regular pr-2">Calories Away From Goal: </span>
        {Math.abs(props.calorieDifference)}
      </p>
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
