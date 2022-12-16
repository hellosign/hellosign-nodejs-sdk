import * as HelloSignSDK from "hellosign-sdk";

const fs = require('fs');

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const signer1 = {
  emailAddress: "jack@example.com",
  name: "Jack",
  order: 0,
};

const signer2 = {
  emailAddress: "jill@example.com",
  name: "Jill",
  order: 1,
};

const signingOptions = {
  draw: true,
  type: true,
  upload: true,
  phone: false,
  defaultType: "draw",
};

const fieldOptions = {
  dateFormat: "DD - MM - YYYY",
};

const data = {
  subject: "The NDA we talked about",
  type: "request_signature",
  message: "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
  signers: [
    signer1,
    signer2,
  ],
  ccEmailAddresses: [
    "lawyer@hellosign.com",
    "lawyer@example.com",
  ],
  file: [fs.createReadStream("example_signature_request.pdf")],
  metadata: {
    "custom_id": 1234,
    "custom_text": "NDA #9",
  },
  signingOptions,
  fieldOptions,
  testMode: true,
};

const result = api.unclaimedDraftCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
