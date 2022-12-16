import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const signer1 = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
};

const cc1 = {
  role: "Accounting",
  emailAddress: "accounting@hellosign.com",
};

const data = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  templateIds: ["61a832ff0d8423f91d503e76bfbcc750f7417c78"],
  requesterEmailAddress: "jack@hellosign.com",
  signers: [ signer1 ],
  ccs: [ cc1 ],
  testMode: true,
};

const result = api.unclaimedDraftCreateEmbeddedWithTemplate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
