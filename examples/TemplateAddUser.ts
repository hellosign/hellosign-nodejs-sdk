import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data: HelloSignSDK.TemplateAddUserRequest = {
  emailAddress: "george@hellosign.com",
};

const templateId = "f57db65d3f933b5316d398057a36176831451a35";

const result = api.templateAddUser(templateId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
