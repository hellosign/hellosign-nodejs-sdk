module.exports = {
  'tests': [
    {
      'test_name': 'Get Account: Successful',
      'url': '/account',
      'method': 'GET',
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

    {
      'test_name': 'Update Account: Successful',
      'url': '/account',
      'method': 'POST',
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

      {
        'test_name': 'Create Account: Successful',
        'url': '/account/create',
        'method': 'POST',
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

    {
      'test_name': 'Send Signature Request: Successful',
      'url': '/signature_request/send',
      'method': 'POST',
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
        files : ['NDA.pdf', 'AppendixA.pdf'],
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
      }
  ]
};
