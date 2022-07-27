import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.BulkSendJobApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const bulkSendJobId = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";

const result = api.bulkSendJobGet(bulkSendJobId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
