import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.TemplateRemoveUserRequest = {
  emailAddress: "george@hellosign.com",
};

const templateId = "21f920ec2b7f4b6bb64d3ed79f26303843046536";

const result = api.templateRemoveUser(templateId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
