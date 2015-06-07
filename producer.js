"use strict";
var http = require('http'); 
var querystring = require('querystring');

var produceRandomAddition = function(){
	// Math Random produces values between 0 and 1, times it by 100 gives us the ability to have whole integers when we parse
	var x = parseInt(100 * Math.random());
	var y = parseInt(100 * Math.random());
	
	return x + "+" + y + "="; 
}; 

var requestor = function(producerObject, target){

	var exp = produceRandomAddition(); 
	// prepare the posting objecting 
	var postData = querystring.stringify({ 'expression' : exp });

	console.log('Expression: '+ exp);

	// configure options
	producerObject['method'] = 'POST'; 
	producerObject['headers'] = {
	    'Content-Type': 'application/x-www-form-urlencoded',
	    'Content-Length': postData.length
	};

	// prepare the request, sending in a callback to handle the response 
	var request = http.request(producerObject, function(response){
		console.log("Status code: " + response.statusCode); 

		// output the response from the consumer 
		response.on('data', function(data){
			console.log("Response data: "); 
			console.log(data); 
		}); 
	}); 

	// if there was an error talking to the service 
	request.on('error', function(e){
		// console.log("Service error: ");
		// console.log(e);
	}); 

	// post data to the service 
	request.write(postData); 

	// end our request 
	request.end; 

};


module.exports = requestor; 