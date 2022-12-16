import * as HelloSignSDK from "hellosign-sdk";

const fs = require('fs');

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const role1: HelloSignSDK.SubTemplateRole = {
  name: "Client",
  order: 0,
};

const role2: HelloSignSDK.SubTemplateRole = {
  name: "Witness",
  order: 1,
};

const mergeField1: HelloSignSDK.SubMergeField = {
  name: "Full Name",
  type: HelloSignSDK.SubMergeField.TypeEnum.Text,
};

const mergeField2: HelloSignSDK.SubMergeField = {
  name: "Is Registered?",
  type: HelloSignSDK.SubMergeField.TypeEnum.Checkbox,
};

const fieldOptions: HelloSignSDK.SubFieldOptions = {
  dateFormat: HelloSignSDK.SubFieldOptions.DateFormatEnum.DD_MM_YYYY,
};

const data: HelloSignSDK.TemplateCreateEmbeddedDraftRequest = {
  clientId: "37dee8d8440c66d54cfa05d92c160882",
  file: [fs.createReadStream("example_signature_request.pdf")],
  title: "Test Template",
  subject: "Please sign this document",
  message: "For your approval",
  signerRoles: [
    role1,
    role2,
  ],
  ccRoles: ["Manager"],
  mergeFields: [
    mergeField1,
    mergeField2,
  ],
  fieldOptions,
  testMode: true,
};

const result = api.templateCreateEmbeddedDraft(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
