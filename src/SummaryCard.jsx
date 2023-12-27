import PropTypes from "prop-types";

function SummaryCard(props) {
  return (
    <div className="shadow-md shadow-black bg-[#2a2c36] rounded-xl text-slate-200 w-full h-52 grid grid-rows-3 grid-cols-2 text-md gap-2 md:gap-0">
      <p className="text-left p-2 md:p-5 flex items-center text-ellipsis overflow-hidden ">
        <span className="font-regular pr-1 md:pr-3">Calories Consumed:</span>
        {props.caloriesConsumed || 0}
      </p>
      <p className="text-left p-2 md:p-5 flex items-center text-ellipsis overflow-hidden">
        <span className="font-regular pr-1 md:pr-3">Calories Burned:</span>
        {props.caloriesBurned}
      </p>
      <p className="text-left p-2 md:p-5 flex items-center text-ellipsis overflow-hidden">
        <span className="font-regular pr-1 md:pr-3">Calorie Goal:</span>
        {props.calorieGoal}
      </p>
      <p className="text-left p-2 md:p-5 flex items-center text-ellipsis overflow-hidden">
        <span className="font-regular pr-1 md:pr-3">Resting Heart Rate:</span>
        {props.restingHeartRate}
      </p>
      <p className="col-span-2 p-2 md:p-5 h-fit w-fit m-auto text-ellipsis overflow-hidden">
        <span className="font-regular pr-1 md:pr-3">
          Calories Away From Goal:
        </span>
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
