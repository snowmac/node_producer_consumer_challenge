"use strict";
var http = require('http'); 

var preProcessedQueue = []; 
var postProcessedQueue = []; 

var htmlType = {'Content-Type': 'text/html'}; 
var plainTextType = {'Content-Type': 'text/plain'}; 
var jsonType = {'Content-Type': 'text/json'}; 

var contains = function(list,value){
	if (typeof list === "string"){
		return list.indexOf(value) !== -1; 
	} else if(typeof list === "object"){
		for(var i = 0; i < list.length; i++){
			if (object[i] === value) {
				return true; 
			}
		}
	}
	return false; 
}

var server = function(config){

	console.log('into the server')

	http.createServer(function (request, response) {
		
		console.log('into create server'); 
		console.log(request);

		response.writeHead(200, plainTextType); 
		response.write('foodbar');

		response.end('foo bar')

	}).listen(config.port, config.host);

	console.log("Sever started on: " + config.host + ":" + config.port);
};

module.exports = server; 