import PropTypes from "prop-types";

function CalorieDifference(props) {
  let colorClass = "text-slate-200";

  if (props.calorieDifference > 0) {
    colorClass = "text-green-500";
  } else if (props.calorieDifference < 0) {
    colorClass = "text-red-500";
  }

  return (
    <div className="w-full h-40 m-auto relative">
      <p className="text-7xl p-1 m-1 w-72 truncate absolute left-1/2 -translate-y-1/5 -translate-x-1/2">
        <span id="calorieDifference" className={`peer ${colorClass}`}>
          {" "}
          {Math.abs(props.calorieDifference)}
        </span>
      </p>
      {props.calorieDifference > 0 ? (
        <p
          id="differenceMsg"
          className="hidden w-96 p-1 m-1 absolute left-1/2 -translate-y-1/5 -translate-x-1/2 bottom-0 font-regular text-sm"
        >
          You are in a surplus and have passed your calorie goal by{" "}
          {props.calorieDifference} calories.
        </p>
      ) : props.calorieDifference == 0 ? (
        <p
          id="differenceMsg"
          className="hidden w-96 p-1 m-1  absolute left-1/2 -translate-y-1/5 -translate-x-1/2 bottom-0 font-regular text-sm"
        >
          You are at your calorie goal and don't need to consume any more
          calories.
        </p>
      ) : (
        <p
          id="differenceMsg"
          className="hidden w-96 p-1 m-1  absolute left-1/2 -translate-y-1/5 -translate-x-1/2 bottom-0 font-regular text-sm"
        >
          You are in a deficit and need to consume{" "}
          {Math.abs(props.calorieDifference)} calories to meet your calorie
          goal.
        </p>
      )}
    </div>
  );
}

CalorieDifference.propTypes = {
  calorieDifference: PropTypes.number,
};

export default CalorieDifference;
