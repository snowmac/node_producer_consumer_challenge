"use strict";
var http = require('http');

var queue = {
	// storing the data 
	dataStore: [], 

	// max buffer size
	dataStoreMaxLength: 100, 

	// getter 
	get: function(){
		return dataStore.pop():
	},

	// setter
	set: function(data){
		if(dataStore.length <= dataStoreMaxLength) {
			dataStore.push(data);
			return true; 
		}
		return false; 
	},

	// checker of status
	isFull: function(){
		return dataStore.length === dataStoreMaxLength; 
	}
};

http.createServer(function (request, res) {
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('Hello World\n');

  if()





}).listen(1337, '127.0.0.1');
console.log('Queue running at http://127.0.0.1:1337/');
