import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.SignatureRequestApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const signer1 = {
  role: "Client",
  emailAddress: "george@example.com",
  name: "George",
};

const cc1 = {
  role: "Accounting",
  emailAddress: "accounting@example.com",
};

const customField1 = {
  name: "Cost",
  value: "$20,000",
  editor: "Client",
  required: true,
};

const signingOptions = {
  draw: true,
  type: true,
  upload: true,
  phone: false,
  defaultType: "draw",
};

const data = {
  templateIds: ["c26b8a16784a872da37ea946b9ddec7c1e11dff6"],
  subject: "Purchase Order",
  message: "Glad we could come to an agreement.",
  signers: [ signer1 ],
  ccs: [ cc1 ],
  customFields: [ customField1 ],
  signingOptions,
  testMode: true,
};

const result = api.signatureRequestSendWithTemplate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
