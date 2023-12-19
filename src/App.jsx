import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SummaryCard from "./SummaryCard";

function App() {
  const [caloriesBurned, setCaloriesBurned] = useState("--");
  const [restingHeartRate, setRestingHeartRate] = useState();
  const [calorieGoal, setCalorieGoal] = useState("--");
  const [caloriesNeeded, setCaloriesNeeded] = useState("--");
  const [caloriesConsumed, setCaloriesConsumed] = useState("");

  const baseUrl = "https://api.fitbit.com/1/user/-/";
  const access_token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1JQN1IiLCJzdWIiOiJCSldaTlkiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd2VjZyB3c29jIHdhY3Qgd294eSB3dGVtIHd3ZWkgd2NmIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNzAyOTkwODI0LCJpYXQiOjE3MDI5NjIwMjR9.Wdvb92QzdU5xawtQVN-l3iofx_4n0AMnu5EirwWqVPc";

  useEffect(() => {
     axios({
      method: "GET",
      url: baseUrl + "activities/heart/date/today/1d.json",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(caloriesConsumed + " burned");
  };

  return (
    <>
      <div className="buttonContainer">
        <form onSubmit={handleSubmit}>
          <input
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
      <p>Calories Burned: {caloriesBurned}</p>
      <SummaryCard
        caloriesBurned={caloriesBurned}
        restingHeartRate={restingHeartRate}
      />
    </>
  );
}

export default App;
