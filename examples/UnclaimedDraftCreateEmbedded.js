import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  fileUrl: ["https://app.hellosign.com/docs/example_signature_request.pdf"],
  requesterEmailAddress: "jack@hellosign.com",
  testMode: true,
};

const result = api.unclaimedDraftCreateEmbedded(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
