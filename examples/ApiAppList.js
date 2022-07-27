import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.ApiAppApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const page = 1;
const pageSize = 2;

const result = api.apiAppList(page, pageSize);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
