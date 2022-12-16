import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const teamId = "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c";

const result = api.teamSubTeams(teamId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
