import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.EmbeddedApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.EmbeddedEditUrlRequest = {
  ccRoles: [""],
  mergeFields: [],
};

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.embeddedEditUrl(templateId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
