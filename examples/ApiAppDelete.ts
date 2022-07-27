import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.ApiAppApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

const result = api.apiAppDelete(clientId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
