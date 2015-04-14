/* NOTE: Setup instructions
* Before running the tests, do the following
* ===========================================
* 1. Create an account, upgrade to Business and add an API plan
* 2. Create an api app, set the client id and secret as environment variables
* 3. Create two templates, both with a single role named 'Signer' */

var api_key = 'API_KEY';
var client_id = 'CLIENT_ID';
var client_secret = 'SECRET';


module.exports = {
	key: api_key,
	client_id: client_id,
	client_secret: client_secret
};