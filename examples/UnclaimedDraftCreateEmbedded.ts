import * as HelloSignSDK from "hellosign-sdk";

const fs = require('fs');

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.UnclaimedDraftCreateEmbeddedRequest = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  file: [fs.createReadStream("example_signature_request.pdf")],
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
