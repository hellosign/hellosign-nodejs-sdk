import * as HelloSignSDK from "hellosign-sdk";

const fs = require('fs');

const api = new HelloSignSDK.ApiAppApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const oauth: HelloSignSDK.SubOAuth = {
  callbackUrl: "https://example.com/oauth",
  scopes: [
    HelloSignSDK.SubOAuth.ScopesEnum.BasicAccountInfo,
    HelloSignSDK.SubOAuth.ScopesEnum.RequestSignature,
  ],
};

const whiteLabelingOptions: HelloSignSDK.SubWhiteLabelingOptions = {
  primaryButtonColor: "#00b3e6",
  primaryButtonTextColor: "#ffffff",
};

const data: HelloSignSDK.ApiAppCreateRequest = {
  name: "My Production App",
  domains: ["example.com"],
  customLogoFile: fs.createReadStream("CustomLogoFile.png"),
  oauth,
  whiteLabelingOptions,
};

const result = api.apiAppCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
