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
  const access_token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1JQN1IiLCJzdWIiOiJCSldaTlkiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd2VjZyB3c29jIHdhY3Qgd294eSB3dGVtIHd3ZWkgd2NmIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNzAzMDY5OTMwLCJpYXQiOjE3MDMwNDExMzB9.W1s4f_3ENv1Gp8cnkk19Vrm-aS8X8n4DoGHk4mN_JTg";

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

    //getting estimated calories to be burned for remaining minutes in day
    estimatedCaloriesToBeBurnedToday =
      (restingHeartRate * minsToMidnight()) / 60;

    //adding estimated calories left to already burnt calories to get a full days worth estimate of calories burned
    estimatedCaloriesToBeBurnedToday =
      estimatedCaloriesToBeBurnedToday + parseInt(caloriesBurned, 10);

    //add 500 calories to the full days worth estimate of calories burned
    updatedCalorieGoal =
      calorieSurplusDeficitGoal + estimatedCaloriesToBeBurnedToday;

    setCalorieGoal(updatedCalorieGoal);

    //subtract above(daily estimated burned) from the calories consumed in button press.
    setCalorieDifference(caloriesConsumed - updatedCalorieGoal);
  };

  //calBurned, RHR, calGoal, calNeeded, print cal needed above input, calEaten in summary too

  function minsToMidnight() {
    var now = new Date();
    var then = new Date(now);
    then.setHours(24, 0, 0, 0);
    minutesLeftInDay = (then - now) / 6e4;
    return minutesLeftInDay;
  }

  return (
    <>
      <CalorieDifference calorieDifference={parseInt(calorieDifference)} />
      <div className="buttonContainer">
        <form onSubmit={handleSubmit}>
          <input
            id="calories-consumed"
            className="text-white"
            value={caloriesConsumed}
            onChange={(e) => setCaloriesConsumed(e.target.value)}
            placeholder="Enter Calories Eaten"
          />
          <button className="bg-gray-700 text-white" type="submit">
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
    </>
  );
}

export default App;
