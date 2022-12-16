import * as HelloSignSDK from "hellosign-sdk";

const fs = require('fs');

const api = new HelloSignSDK.ApiAppApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const whiteLabelingOptions: HelloSignSDK.SubWhiteLabelingOptions = {
  primaryButtonColor: "#00b3e6",
  primaryButtonTextColor: "#ffffff",
};

const data: HelloSignSDK.ApiAppUpdateRequest = {
  name: "New Name",
  callbackUrl: "http://example.com/hellosign",
  customLogoFile: fs.createReadStream("CustomLogoFile.png"),
  whiteLabelingOptions,
};

const clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

const result = api.apiAppUpdate(clientId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
