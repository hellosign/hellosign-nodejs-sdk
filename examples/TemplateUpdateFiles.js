import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data = {
  fileUrl: ["https://app.hellosign.com/docs/example_signature_request.pdf"],
};

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.templateUpdateFiles(templateId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
