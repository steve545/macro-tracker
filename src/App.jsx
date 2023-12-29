import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SummaryCard from "./SummaryCard";
import CalorieDifference from "./CalorieDifference";

function App() {
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [restingHeartRate, setRestingHeartRate] = useState(0);
  const [calorieGoal, setCalorieGoal] = useState(0);
  const [calorieDifference, setCalorieDifference] = useState(0);
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  let minutesLeftInDay = 0;
  let estimatedCaloriesToBeBurnedToday = 0;
  let calorieSurplusDeficitGoal = 500;
  let updatedCalorieGoal = 0;

  const baseUrl = "https://api.fitbit.com/1/user/-/";
  const access_token = "";

  useEffect(() => {
    axios({
      method: "GET",
      url: baseUrl + "activities/heart/date/today/7d.json",
      headers: { Authorization: "Bearer " + access_token },
    })
      .then((response) =>
        setRestingHeartRate(
          response.data["activities-heart"][0]["value"]["restingHeartRate"]
        )
      )
      .catch((err) => console.log(err));

    axios({
      method: "GET",
      url: baseUrl + "activities/calories/date/today/1d.json",
      headers: { Authorization: "Bearer " + access_token },
    })
      .then((response) =>
        setCaloriesBurned(response.data["activities-calories"][0]["value"])
      )
      .catch((err) => console.log(err));
  }, []);

  function checkInput() {
    let input = document.getElementById("calories-consumed").value;
    let regex = /^[0-9]+$/;
    if (!input.match(regex)) {
      alert("Must input numbers");
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkInput()) {
      return;
    }

    let differenceMsg = document.getElementById("differenceMsg");
    differenceMsg.style.display = "block";

    estimatedCaloriesToBeBurnedToday =
      (restingHeartRate * minsToMidnight()) / 60;

    estimatedCaloriesToBeBurnedToday =
      estimatedCaloriesToBeBurnedToday + parseInt(caloriesBurned, 10);

    updatedCalorieGoal =
      calorieSurplusDeficitGoal + estimatedCaloriesToBeBurnedToday;

    setCalorieGoal(updatedCalorieGoal);

    setCalorieDifference(caloriesConsumed - updatedCalorieGoal);
  };

  function minsToMidnight() {
    var now = new Date();
    var then = new Date(now);
    then.setHours(24, 0, 0, 0);
    minutesLeftInDay = (then - now) / 6e4;
    return minutesLeftInDay;
  }

  return (
    <div className="grid h-[30rem] gap-3 m-2 w-[26rem] md:w-[35rem]">
      <CalorieDifference calorieDifference={parseInt(calorieDifference)} />
      <div className="m-auto w-full h-fit md:w-[26rem]">
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-10">
          <input
            id="calories-consumed"
            className="text-slate-200 bg-[#2a2c36] col-span-2 p-2 shadow-md shadow-black rounded-lg  text-lg focus:ring-blue-500 focus:outline-none focus:ring-2 placeholder:font-regular placeholder:italic placeholder:text-sm"
            value={caloriesConsumed}
            onChange={(e) => setCaloriesConsumed(e.target.value)}
            placeholder="Enter Calories Eaten"
          />
          <button
            className="shadow-md shadow-black bg-blue-600 text-slate-200 font-regular focus:outline-none active:ring-2 active:ring-blue-500 hover:bg-blue-500 active:bg-[#2a2c36] active:text-blue-500 active:font-medium"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <SummaryCard
        caloriesBurned={parseInt(caloriesBurned)}
        restingHeartRate={parseInt(restingHeartRate)}
        calorieGoal={parseInt(calorieGoal)}
        caloriesNeeded={parseInt(calorieDifference)}
        caloriesConsumed={parseInt(caloriesConsumed)}
        calorieDifference={parseInt(calorieDifference)}
      />
    </div>
  );
}

export default App;
