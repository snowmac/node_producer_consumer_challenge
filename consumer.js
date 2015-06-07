"use strict";
var http = require('./http'); 

var preProcessedQueue = []; 
var postProcessedQueue = []; 

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

	http.createServer(function (request, response) {
		
		var url = request.url; 

		// if we're posting to the consumer route 
		if(contains(url, '/consumer')){
			console.log(request)
		} 

	}).listen(config.port, config.host);

	console.log("Sever started on: " + config.host + ":" + config.port);
};

module.exports = server; 