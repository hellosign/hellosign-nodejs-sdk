import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data: HelloSignSDK.TeamCreateRequest = {
  name: "New Team Name"
};

const result = api.teamCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
