const access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1JQN1IiLCJzdWIiOiJCSldaTlkiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd2VjZyB3c29jIHdhY3Qgd294eSB3dGVtIHd3ZWkgd2NmIHdzZXQgd3JlcyB3bG9jIiwiZXhwIjoxNzAyNjU5NDAxLCJpYXQiOjE3MDI2MzA2MDF9.hB3W-77msVHpYWrEUupqUjXRm0blawn2rlaKqsUQY1E";

fetch(
  "https://api.fitbit.com/1/user/-/activities/calories/date/today/1d.json",
  {
    method: "GET",
    headers: { Authorization: "Bearer " + access_token },
  }
)
  .then((response) => response.json())
  .then((json) => console.log(json));
