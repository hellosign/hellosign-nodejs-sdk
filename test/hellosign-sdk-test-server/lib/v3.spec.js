module.exports = {
  'tests': [
//0
    {
      'test_name': 'Get Account: Successful',
      'url': '/account',
      'method': 'GET',
      'acceptsFiles': false,
      'sendsFiles': false,
      'status': 200,
      'body': null,
      'response': {
          "account": {
              "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
              "email_address": "me@hellosign.com",
              "is_paid_hs" : true,
              "is_paid_hf" : false,
              "quotas" : {
                  "api_signature_requests_left": 1250,
                  "documents_left": null,
                  "templates_left": null
              },
              "callback_url": null,
              "role_code": null
            }
        }
      },
//1
    {
      'test_name': 'Update Account: Successful',
      'url': '/account',
      'method': 'POST',
      'acceptsFiles': false,
      'sendsFiles': false,
      'status': 200,
      'body': {
        callback_url: "https://www.example.com/callback"
        },
      'response': {
            "account": {
                "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
                "email_address": "me@hellosign.com",
                "is_paid_hs" : true,
                "is_paid_hf" : false,
                "quotas" : {
                    "api_signature_requests_left": 1250,
                    "documents_left": null,
                    "templates_left": null
                },
                "callback_url": "https://www.example.com/callback",
                "role_code": null
            }
        }
      },
//2
      {
        'test_name': 'Create Account: Successful',
        'url': '/account/create',
        'method': 'POST',
        'acceptsFiles': false,
        'sendsFiles': false,
        'status': 200,
        'body': {
          email_address: "newuser@hellosign.com"
          },
        'response': {
              "account": {
                  "account_id": "a2b31224f7e6fb5581d2f8cbd91cf65fa2f86aae",
                  "email_address": "newuser@hellosign.com",
                  "is_paid_hs" : false,
                  "is_paid_hf" : false,
                  "quotas" : {
                      "documents_left": 3,
                      "api_signature_requests_left": 0,
                      "templates_left": "1"
                  },
                  "callback_url": null,
                  "role_code": null
              }
          }
        },
//3
    {
      'test_name': 'Send Signature Request: Successful',
      'url': '/signature_request/send',
      'method': 'POST',
      'acceptsFiles': true,
      'sendsFiles': false,
      'status': 200,
      'body': {
        test_mode : 1,
        title : 'NDA with Acme Co.',
        subject : 'The NDA we talked about',
        message : 'Please sign this NDA and then we can discuss more.',
        signers : [
            {
                email_address : 'jack@example.com',
                name : 'Jack',
                order : 0
            },
            {
                email_address : 'jill@example.com',
                name : 'Jill',
                order : 1
            }
        ],
        cc_email_addresses : ['lawyer@example.com', 'lawyer2@example.com'],
        files : ['NDA.pdf'],
        metadata : {
            clientId : '1234',
            custom_text : 'NDA #9'
          }
        },
      'response': {
          "signature_request": {
              "signature_request_id": "2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
              "title": "NDA with Acme Co.",
              "subject": "The NDA we talked about",
              "message": "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
              "test_mode": true,
              "metadata" : {
                  "custom_id" : "1234",
                  "custom_text" : "NDA #9"
              },
              "is_complete": false,
              "has_error": false,
              "custom_fields": [
              ],
              "response_data": [
              ],
              "signing_url": "https://www.hellosign.com/editor/sign?guid=2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
              "signing_redirect_url": null,
              "final_copy_uri": "/v3/signature_request/final_copy/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
              "files_url": "https://api.hellosign.com/v3/signature_request/files/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
              "details_url": "https://www.hellosign.com/home/manage?guid=2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
              "requester_email_address": "me@hellosign.com",
              "signatures": [
                  {
                      "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
                      "signer_email_address": "jack@example.com",
                      "signer_name": "Jack",
                      "order": 0,
                      "status_code": "awaiting_signature",
                      "signed_at": null,
                      "last_viewed_at": null,
                      "last_reminded_at": null,
                      "has_pin": false
                  },
                  {
                      "signature_id": "616629ed37f8588d28600be17ab5d6b7",
                      "signer_email_address": "jill@example.com",
                      "signer_name": "Jill",
                      "order": 1,
                      "status_code": "awaiting_signature",
                      "signed_at": null,
                      "last_viewed_at": null,
                      "last_reminded_at": null,
                      "has_pin": false
                  }
              ],
              "cc_email_addresses": [
                  "lawyer1@hellosign.com",
                  "lawyer2@example.com"
              ]
            }
          }
      },
//4
      {
        'test_name': 'Verify Account: Successful',
        'url': '/account/verify',
        'method': 'POST',
        'acceptsFiles': false,
        'sendsFiles': false,
        'status': 200,
        'body': {
          email_address: "some_user@hellosign.com"
          },
        'response': {
              "account": {
                  "email_address": "some_user@hellosign.com"
              }
          }
        },
//5
        {
          'test_name': 'Send Signature Request With Template: Successful',
          'url': '/signature_request/send_with_template',
          'method': 'POST',
          'acceptsFiles': false,
          'sendsFiles': false,
          'status': 200,
          'body': {
              test_mode : 1,
              template_id : 'c26b8a16784a872da37ea946b9ddec7c1e11dff6',
              subject : 'Purchase Order',
              message : 'Glad we could come to an agreement.',
              signers : [
                  {
                      email_address : 'george@example.com',
                      name : 'George',
                      role_name : 'Client'
                  }
              ],
              ccs : [
                  {
                      email_address :'accounting@example.com',
                      role : "Accounting"
                  }
              ],
              custom_fields :{
                  Cost : '$20,000'
              }
          },
          'response': {
                "signature_request": {
                    "signature_request_id": "17d163069282df5eb63857d31ff4a3bffa9e46c0",
                    "title": "Purchase Order",
                    "subject": "Purchase Order",
                    "message": "Glad we could come to an agreement.",
                    "is_complete": false,
                    "has_error": false,
                    "custom_fields": [
                        {
                            "name": "Cost",
                            "value": "$20,000",
                            "type": "text"
                        }
                    ],
                    "response_data": [
                    ],
                    "signing_url": "https://www.hellosign.com/editor/sign?guid=17d163069282df5eb63857d31ff4a3bffa9e46c0",
                    "signing_redirect_url": null,
                    "details_url": "https://www.hellosign.com/home/manage?guid=17d163069282df5eb63857d31ff4a3bffa9e46c0",
                    "requester_email_address": "me@hellosign.com",
                    "signatures": [
                        {
                            "signature_id": "10ab1cd037d9b6cba7975d61ff428c8d",
                            "signer_email_address": "george@example.com",
                            "signer_name": "George",
                            "order": null,
                            "status_code": "awaiting_signature",
                            "signed_at": null,
                            "last_viewed_at": null,
                            "last_reminded_at": null,
                            "has_pin": false
                        }
                    ],
                    "cc_email_addresses": [
                        "accounting@hellosign.com"
                    ]
                }
            }
        },
//6
        {
          'test_name': 'List Signature Requests: Successful',
          'url': '/signature_request/list',
          'method': 'GET',
          'acceptsFiles': false,
          'sendsFiles': false,
          'status': 200,
          //TODO >> make this take params!
          'urlParams': [],
          'body': null,
          'response': {
              "list_info": {
                  "page": 1,
                  "num_pages": 1,
                  "num_results": 2,
                  "page_size": 20
              },
              "signature_requests": [
                  {
                      "signature_request_id": "d10338cad145e1cb68afc828",
                      "title": "FHA",
                      "subject": "FHA",
                      "message": "Let me know if you two have any questions.",
                      "is_complete": false,
                      "has_error": false,
                      "custom_fields": [
                      ],
                      "response_data": [
                      ],
                      "signing_url": "https://www.hellosign.com/editor/sign?guid=d10338cad145e1cb68afc828",
                      "signing_redirect_url": null,
                      "details_url": "https://www.hellosign.com/home/manage?guid=d10338cad145e1cb68afc828",
                      "requester_email_address": "me@hellosign.com",
                      "signatures": [
                          {
                              "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
                              "signer_email_address": "george-jetson@example.com",
                              "signer_name": "George Jetson",
                              "order": 0,
                              "status_code": "awaiting_signature",
                              "signed_at": null,
                              "last_viewed_at": null,
                              "last_reminded_at": null,
                              "has_pin" : false
                          },
                          {
                              "signature_id": "616629ed37f8588d28600be17ab5d6b7",
                              "signer_email_address": "jane-jetson@example.com",
                              "signer_name": "Jane Jetson",
                              "order": 1,
                              "status_code": "awaiting_signature",
                              "signed_at": null,
                              "last_viewed_at": null,
                              "last_reminded_at": null,
                              "has_pin" : false
                          }
                      ],
                      "cc_email_addresses": [
                          "stan@example.com"
                      ]
                  },
                  {
                      "signature_request_id": "fa5c8a0b0f492d768749333a",
                      "title": "Purchase Agreement",
                      "subject": "Purchase Agreement",
                      "message": "Please sign and return.",
                      "is_complete": true,
                      "has_error": false,
                      "custom_fields": [
                      ],
                      "response_data": [
                          {
                              "api_id": "uniqueIdHere_1",
                              "name": "Needs Express Shipping",
                              "signature_id": "5687fb7bd5aaacb1689728762b600c74",
                              "value": true,
                              "type": "checkbox"
                          },
                          {
                              "api_id": "uniqueIdHere_2",
                              "name": "Shipping Address",
                              "signature_id": "5687fb7bd5aaacb1689728762b600c74",
                              "value": "1212 Park Avenuee",
                              "type": "text"
                          },
                          {
                              "api_id": "uniqueIdHere_3",
                              "name": "DateSigned",
                              "signature_id": "5687fb7bd5aaacb1689728762b600c74",
                              "value": "09/01/2012",
                              "type": "date_signed"
                          }
                      ],
                      "signing_url": null,
                      "signing_redirect_url": null,
                      "details_url": "https://www.hellosign.com/home/manage?guid=fa5c8a0b0f492d768749333a",
                      "requester_email_address": "me@hellosign.com",
                      "signatures": [
                          {
                              "signature_id": "5687fb7bd5aaacb1689728762b600c74",
                              "signer_email_address": "john@example.com",
                              "signer_name": "John Doe",
                              "order": null,
                              "status_code": "signed",
                              "signed_at": 1346521550,
                              "last_viewed_at": 1346521483,
                              "last_reminded_at": null
                          }
                      ],
                      "cc_email_addresses": [
                      ]
                  }
              ]
            }
          },
// 7
          {
            'test_name': 'Get Signature Request Files: Successful',
            'url': '/signature_request/files/:requestId',
            'method': 'GET',
            'acceptsFiles': false,
            'sendsFiles': true,
            'status': 200,
            'body': null,
            'response': null
            },
  ]
};
