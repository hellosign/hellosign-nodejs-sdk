import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.EmbeddedApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

const result = api.embeddedSignUrl(signatureId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
