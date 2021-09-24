Hellosign NodeJS SDK [![Build Status](https://travis-ci.org/HelloFax/hellosign-nodejs-sdk.svg?branch=v3)](https://travis-ci.org/HelloFax/hellosign-nodejs-sdk)
-------------------


A NodeJS / JavaScript wrapper for the [HelloSign API](http://www.hellosign.com/api)

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Modules](#modules)
- [Tests](#tests)
- [Additional Notes](#additional-notes)


## Installation

First time using npm? Read more about installing npm packages [here] (https://docs.npmjs.com/downloading-and-installing-packages-locally).

Install from npm:
````sh
# Optionally, to scaffold your package.json first
npm init

npm install hellosign-sdk
# Optionally, to install testing / development dependencies
cd node_modules/hellosign-sdk
npm install
````

Install from code:
````sh
git clone https://github.com/HelloFax/hellosign-nodejs-sdk.git
cd hellosign-nodejs-sdk
# install dependencies
npm install
````

## Configuration

In your Node application, require `hellosign-sdk` (or the path to the sdk folder if not using npm) and pass authentication information to initialize it:

````javascript
// Initialize using api key
var hellosign = require('hellosign-sdk')({key: 'YOUR API KEY HERE'});

OR

// Initialize using email and password
var hellosign = require('hellosign-sdk')({username: 'your_email_address', password: 'your_password'});

OR

// Initialize for embedded requests using your api key, client id, and (optionally, for OAuth) client secret
var hellosign = require('hellosign-sdk')({key: 'YOUR API KEY HERE', client_id: 'your client id', client_secret: 'your client secret'});

````

For initialization for Oauth app-specific calls, see the [Oauth section below](#oauth).

## Usage

Each function in the SDK is called from your initialized hellosign object, followed by the module name, and then the method.

```javascript
    hellosign.template.list();
```

See [below](#modules) for a list of modules and their associated endpoint methods.

### Return values

The results of each method can be accessed either as a callback, or a promise:

Callback style responses are included as the last (or only, in the case of no others) parameter in a call:

```javascript
hellosign.signatureRequest.send({/*options*/}, function(err, response){
    if (err) {
        //do something with error
    } else {
        //parse response
    }
});
```

Promise style access is through Javascript!

```javascript
hellosign.signatureRequest.send({/*options*/})
    .then(function(response){
        //parse response
    })
    .catch(function(err){
        //do something with error
    })
    .finally(function(){
        //optionally do yet another thing
    });
```

Returned promises are then-able, or can be returned for later resolution.


## Modules

Modules in the SDK are as follows:

- [Account](#account)
- [Signature Request](#signature-request)
- [Embedded](#embedded)
- [OAuth](#oauth)
- [Team](#team)
- [Template](#template)
- [Reports](#reports)
- [Unclaimed Draft](#unclaimed-draft)
- [API App](#api-app)

### Account

#### Get current account information

````javascript
hellosign.account.get()
    .then();
````

#### Update your account information

````javascript
var new_callback_url = "https://www.example.com/callback"
hellosign.account.update({callback_url: new_callback_url})
    .then();
````

#### Create a new HelloSign account

````javascript
var email: "new_user@example.com";

hellosign.account.create({
    email_address: email
})
.then();
````

#### Verify if an account exists (only for paid API users)

````javascript
var email: "possibly_existing_user@example.com";
var account_id: '12738igfe87egqo22';

hellosign.account.verify({email_address: email,})
.then();

hellosign.account.verify({account_id: email,})
.then();
````

### Signature Request


#### Get an existing Signature Request by ID

````javascript
hellosign.signatureRequest.get("fa5c8a0b0f492d768749333ad6fcc214c111e967")
.then();
````

#### Get a list of your Signature Requests

````javascript
hellosign.signatureRequest.list()
  .then(function(res){
    console.log(res.signature_requests);
  });
````

This endpoint can optionally receive the parameters `page`, and `page_size`, passed in as an options object:

````javascript
hellosign.signatureRequest.list({page: 2, page_size: 15})
````

This endpoint can optionally be used to query and search for items such as `page`, `title`, and `from` passed in as an options object:

````javascript
const opts = {
  page: 1,
  query: 'title:Test +title AND from:me'
}

hellosign.signatureRequest.list(opts).then((res) => {
  console.log(res);
}).catch((err) => {
  console.error(err);
});
````

#### Send a Signature Request

````javascript
var signers = [
      {
        email_address : 'jack@example.com',
        name : 'Jack',
        order : 0,
        sms_phone_number: '+14155550101',
      },
      {
        email_address : 'jill@example.com',
        name : 'Jill',
        order : 1,
      }
    ]

OR

// Any of the signers is eligible to sign for the entire group.
var signerGroup = [
  {
    group: 'Authorized signatory',
    [0]: {
      name: 'Jack',
      email_address: 'jack@example.com'
    },
    [1]: {
      name: 'Jill',
      email_address: 'jill@example.com'
    }
  },
]

var options = {
    test_mode : 1,
    title : 'NDA with Acme Co.',
    subject : 'The NDA we talked about',
    message : 'Please sign this NDA and then we can discuss more. Let me know if you have any questions.',
    signers : signers,
    attachments: [
        {
          name: 'Example Name',
          instructions: 'Example instructions',
          signer_index: 1,
          required: 1,
        },
      ],
    cc_email_addresses : ['lawyer@example.com', 'lawyer2@example.com'],
    files : ['my/docs/nda.pdf'],
    metadata : {
                  clientId : '1234',
                  custom_text : 'NDA #9'
        }
};

hellosign.signatureRequest.send(options)
      .then(function(res){
        console.log(res.signature_request);
      });
````

#### Send a Signature Request with Template

````javascript
var signers = [
  {
    email_address : 'george@example.com',
    name : 'George',
    role : 'Signer'
  }
]

OR

// Any of the signers is eligible to sign for the entire group.
var signerGroup = [
  {
    role: 'Signer',
    group: 'Authorized signatory',
    [0]: {
      name: 'George',
      email_address: 'george@example.com',
    },
    [1]: {
      name: 'Gina',
      email_address: 'gina@example.com',
    }
  },
]

var options = {
   test_mode : 1,
   template_id : '7b63c2131099ef7effeb0e980e2c42005fe3405d',
   subject : 'Purchase Order',
   message : 'Glad we could come to an agreement.',
   signers : signers,
   custom_fields: [
     {
     	name: "start_date",
	value: "01/10/2016",
	editor: "Signer",
	required: true
     }
   ]
};

hellosign.signatureRequest.sendWithTemplate(options)
  .then(function(res){
    console.log(res.signature_request);
  });
````

#### Send a reminder about an outstanding signature request
````javascript
var request_id = 'fa5c8a0b0f492d768749333ad6fcc214c111e967'
var email = 'thedude@abides.com'
hellosign.signatureRequest.remind(request_id,{email_address : email})
    .then(function(res){
        console.log(res.signature_request);
    });
````

#### Update an email address on a signature request
````javascript
const opts = {
  signature_id: '35e3787bd2e61e496099',
  email_address: 'mary@example.com',
}

hellosign.signatureRequest.update('2f9781e1a8e2045224d808c153c2e1d3df6f8f2f', opts).then((res) => {
  console.log('what is the response?', res);
}).catch((err) => {
  console.error('what is the error?', err);
});

````

#### Download files from a signature request
````javascript
var request_id = 'fa5c8a0b0f492d768749333ad6fcc214c111e967'
hellosign.signatureRequest.download(request_id, {file_type: 'zip'}, function(err, response) {
    var file = fs.createWriteStream("files.zip");
    response.pipe(file);
    file.on('finish', function() {
      file.close();
    });
});
````

#### Cancel an outstanding signature request
````javascript
var request_id = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';
hellosign.signatureRequest.cancel(request_id)
.then(function(response){
  console.log(response.statusCode);
  console.log(response.statusMessage);
})
.catch(function(err){
  // Handle errors
});
````
See below for more info on the statusCode / statusMessage properties.

#### Remove Signature Request Access
````javascript
var request_id = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';
hellosign.signatureRequest.removeAccess(request_id)
.then(function(response){
  console.log(response.statusCode);
  console.log(response.statusMessage);
})
.catch(function(err){
  // Handle errors
});
````
See below for more info on the statusCode / statusMessage properties.

#### Send an embedded signature request
````javascript
var options = {
  test_mode : 1,
  clientId : '0836272d66a1b53f9822f3aa07aef704',
  title : 'NDA with Acme Co.',
  subject : 'The NDA we talked about',
  message : 'Please sign this NDA and then we can discuss more. Let me know if you have any questions.',
  signers : [
    {
      email_address : 'jack@example.com',
      name : 'Jack',
      order : 0,
      sms_phone_number: '+14155550101',
    },{
      email_address : 'jill@example.com',
      name : 'Jill',
      order : 1,
    }
  ],
  attachments: [
      {
        name: 'Example Name',
        instructions: 'Example instructions',
        signer_index: 1,
        required: 1,
      },
    ],
  cc_email_addresses : ['lawyer@example.com', 'lawyer@example2.com'],
  files : ['my/files/nda.pdf']
};

hellosign.signatureRequest.createEmbedded(options)
  .then(function(res){
    console.log(res.signature_request);
  });

````

#### Send an embedded signature request with a template
````javascript
var options = {
   test_mode : 1,
   clientId : '0836272d66a1b53f9822f3aa07aef704',
   template_id : '7b63c2131099ef7effeb0e980e2c42005fe3405d',
   subject : 'Purchase Order',
   message : 'Glad we could come to an agreement.',
   signers : [
     {
       email_address : 'george@example.com',
       name : 'George',
       role : 'Signer'
     }
   ]
};

hellosign.signatureRequest.createEmbeddedWithTemplate(options);
  .then(function(res){
    console.log(res.signature_request);
  });
````

#### Release On-Hold Signature Request
````javascript
var request_id = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';
hellosign.signatureRequest.releaseHold(request_id)
.then(function(response){
  console.log(response);
})
.catch(function(err){
  // Handle errors
});
````

### Embedded

#### Get an embedded sign URL
````javascript
var signature_id = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';
hellosign.embedded.getSignUrl(signature_id)
    .then();
````

#### Get an embedded template's edit URL
````javascript
// GET
var template_id = '7b63c2131099ef7effeb0e980e2c42005fe3405d';
hellosign.embedded.getEditUrl(template_id)
    .then();

// POST
var template_id = '7b63c2131099ef7effeb0e980e2c42005fe3405d';

const opts = {
  test_mode: 1,
  merge_fields: [{"name":"Last Name","type":"text"}]
};
hellosign.embedded.postEditUrl(template_id, opts)
    .then();
````
### Reports

#### Gives you insights into user activity and document status

#### Get a Report
````javaScript
const opts = {
  test_mode: 1,
  start_date: '09/13/2020',
  end_date: '09/20/2020',
  report_type: ['user_activity', 'document_status']
};

client.reports.get(opts).then((res) => {
  console.log('what is the response?', res);
}).catch((err) => {
  console.error('what is the error?', err);
});
````

### OAuth

#### Get the user to authorize your app

You'll need to create an API app, and add OAuth support, and then use the URL provided to authorize users for your application.
When you do so, you'll get a state and code value that can be used as below to get an OAuth access token.

See our [OAuth 2.0 walkthrough](https://www.hellosign.com/api/oauthWalkthrough) for more details.

#### Get an app-specific access token
````javascript
var hellosign = require('./hellosign.js')({key: 'YOUR API KEY HERE', client_id: 'your client id', client_secret: 'your client secret'});

hellosign.oauth.getToken({state : '53b02619', code : '1d0219ea3363aa67'})
    .then();
````

#### Make API calls using your OAuth token:

Use the access token to instantiate an app-specific HelloSign object:

````javascript
var hellosignOauth = require('./hellosign-nodejs-sdk/lib/hellosign.js')({oauthToken: 'YOUR_ACCESS_TOKEN'});
````

You can then use the HelloSign object you've created with the Oauth key to perform requests with that key:

````javascript
var options = {
    test_mode : 1,
    title : 'NDA with Acme Co.',
    subject : 'The NDA we talked about',
    message : 'Please sign this NDA and then we can discuss more. Let me know if you have any questions.',
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
    cc_email_addresses : ['lawyer@example.com', 'lawyer@example2.com'],
    files : ['nda.pdf']
};

hellosignOauth.signatureRequest.send(options)
    .then();
````

#### Refresh your OAuth token

From the HelloSign instance with your app's client_id and secret set, you can also use the refresh token you got in the first token call above to fetch a new access token for your use:

````javascript
hellosign.oauth.refreshToken({refresh_token : 'YOUR_REFRESH_TOKEN'})
    .then();
````

### Team

#### Get your team's information
````javascript
hellosign.team.get()
    .then(function(res){
        console.log(res.team);
    });
````

#### Create a team (if you don't have one)
````javascript
var team_name = 'Radion 6'
hellosign.team.create({name: team_name})
  .then(function(res){
    console.log(res.team);
  });
````

#### Update team
````javascript
var newName = 'The Mr. T Team';
hellosign.team.update({name: newName})
  .then(function(res){
    console.log(res.team);
  });
````

#### Remove team
````javascript
hellosign.team.destroy().then((res) => {
  console.log('what is the statusCode?', res.statusCode);
  console.log('what is the statusMessage?', res.statusMessage);
}).catch((err) => {
  console.error('what is the error?', err);
});
````

#### Add a team member
````javascript
var memberEmail = 'benedict@cumberbatch.org';
hellosign.team.addMember({email_address: memberEmail})
  .then(function(res){
    console.log(res.team);
  });
````

#### Remove a team member
````javascript
var memberEmail = 'benedictinemonk@cumberbatch.org';
hellosign.team.removeMember({email_address: memberEmail})
    .then(function(res){
      console.log(res.team);
    });
````

### Template

#### List current templates
````javascript
hellosign.template.list();
    .then(function(res){
        console.log(res.templates);
    }
````

#### Get a template by id
````javascript
var template_id = '7b63c2131099ef7effeb0e980e2c42005fe3405d';
hellosign.template.get(template_id)
    .then(function(res){
        console.log(res.template);
    });
````

#### Add a team member to a template
````javascript
var template_id = '7b63c2131099ef7effeb0e980e2c42005fe3405d';
var memberEmail = 'robin@batman.com'
hellosign.template.addUser(
        template_id,
        {
          email_address: memberEmail
        }
    )
    .then(function(res){
      console.log(res.template);
    });
````

#### Remove a team member from a template
````javascript
var template_id = '7b63c2131099ef7effeb0e980e2c42005fe3405d';
var memberEmail = 'othersidekick@batman.com'
hellosign.template.removeUser(
        template_id,
        {
          email_address: memberEmail
        }
    )
    .then(function(res){
      console.log(res.template);
    });
````

#### Create an embedded template draft
````javascript
var options = {
    test_mode: 1,
    files: ['my/files/nda.pdf'],
    title: 'embedded draft test',
    subject: 'embedded draft test',
    message: 'embedded draft test',
    signer_roles: [
        {
            name: 'Sherlock',
            order: 0
        },{
            name: 'Watson',
            order: 1
        }
    ],
    cc_roles: ['commissioner@metropolice.gov.uk']
};

var results = hellosign.template.createEmbeddedDraft(options)
    .then(function(res){
        console.log(res.template);
    });
````

#### Delete Template
````javascript
hellosign.template.delete(templateId)
    .then(function(res){
        console.log(response.statusCode);
        console.log(response.statusMessage);
    })
````
### Unclaimed Draft

#### Create an unclaimed draft
````javascript
hellosign.unclaimedDraft.create({
        test_mode : 1,
        files : ['my/files/nda.pdf', 'other/files/secret.pdf']
        })
        .then(function(res){
            console.log(res.unclaimed_draft.claim_url);
        });
````

#### Create an embedded unclaimed draft
````javascript
var options = {
    test_mode : 1,
    clientId : '0836272d66a1b53f9822f3aa07aef704',
    type : 'request_signature',
    subject : 'The NDA we talked about',
    requester_email_address : 'jack@hellosign.com',
    files : ['my/secret/lair/nda.pdf'],
    is_for_embedded_signing : 1
};

hellosign.unclaimedDraft.createEmbedded(options)
    .then(function(res){
        console.log(res.unclaimed_draft.claim_url);
    });
````

#### Create embedded unclaimed draft with template
````javascript
var options = {
    test_mode: 1,
    template_id: '7b63c2131099ef7effeb0e980e2c42005fe3405d',
    title: 'embedded draft test',
    subject: 'embedded draft test',
    message: 'embedded draft test',
    signing_redirect_url: 'http://bondstreet.co.uk',
    requesting_redirect_url: 'http://met.police.uk',

    signers: [
        {
            name: 'Sherlock',
            role: 'Signer',
            email_address: 'sherlock@holmesdetective.co.uk',
            pin: 3645
        },{
            name: 'Watson',
            role: 'Assistant',
            email_address: 'watson@holmesdetective.co.uk',
            pin: 4657
        }
    ],
    attachments: [
        {
          name: 'Example Name',
          instructions: 'Example instructions',
          signer_index: 1,
          required: 1,
        },
      ],
    requester_email_address: 'mrshudson@landlady.com',
    metadata: {
        clue1: 'pink suitcase',
        clue2: 'rache...'
    }
};

hellosign.unclaimedDraft.createEmbeddedWithTemplate(options);
    .then(function(res){
        console.log(res.unclaimed_draft.claim_url);
    });
````

#### Create embedded unclaimed draft edit and resend
````javascript
var options = {
    test_mode: 1,
    clientId: 'b6b8e7deaf8f0b95c029dca049356d4a2cf9710a'
};

hellosign.unclaimedDraft.editAndResend('2f9781e1a83jdja934d808c153c2e1d3df6f8f2f', opts)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
````

### API App

#### Get API App
````javaScript
hellosign.apiApp.get(clientId).then((res) => {
  // handle response
}).catch((err) => {
  // handle error
});
````

#### List API App
````javascript
hellosign.apiApp.list().then((res) => {
  // handle response
}).catch((err) => {
  // handle error
});
````

#### Create API App
````javascript
const opts = {
  name: 'My Cool App',
  domain: 'http://www.example.com',
  callback_url: 'http://www.example.com/callback',
  white_labeling_options: '{"primary_button_color":"#ff0000","primary_button_text_color":"#000000"}'
};

hellosign.apiApp.create(opts).then((res) => {
  // handle response
}).catch((err) => {
  // handle error
});
````

#### Update API App
````javascript
const opts = {
  name: 'My Cool App',
  domain: 'http://www.example.com',
  white_labeling_options: '{"primary_button_color":"#ff0000","primary_button_text_color":"#000000"}'
};

hellosign.apiApp.update(clientId, opts).then((res) => {
  // handle response
}).catch((err) => {
  // handle error
});
````

#### Delete API App
````javascript
hellosign.apiApp.delete(clientId).then((res) => {
  console.log('what is the statusCode?', res.statusCode);
  console.log('what is the statusMessage?', res.statusMessage);
}).catch((err) => {
  console.error('what is the error?', err);
});
````

## Warnings

Any warnings returned from the api will be accessible on the response object returned:

````javascript
hellosign.account.get()
	.then(function(res){
		console.log(res.warnings);
	});
````

## Status codes

On any response object, you can inspect the `statusCode` and `statusMessage` properties to get HTTP status information.

This is especially useful for endpoints that don't return any JSON information, like `cancel`:

````javascript
hellosign.signatureRequest.cancel('fa5c8a0b0a492d768749333ad6fcc214c111e967')
.then(function(response){
  console.log(response.statusCode);
  console.log(response.statusMessage);
});
````

## Tests

Unit tests can be run simply by executing:
````sh
npm test
````

Mocked functional tests are coming soon. Look inside the repo for a sneak peak.

## Additional notes

### Local callbacks
We do not allow app callbacks (event or OAuth) to be set to localhost. However it is still possible to test callbacks against a local server. Tunneling services such as ngrok (http://ngrok.com) can help you set this up.

## License

```
The MIT License (MIT)

Copyright (C) 2020 hellosign.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
