var consumer = require('./consumer');
var producer = require('./producer');
var config = require('./config');

// Start the consumer
consumer(config.consumer); 

// Start many producers
var fireProducer = function(){
	for(var i = 0; i < config.prducer.length; i++){
		producer(config.producer[i], config.consumer); 
	}
}; 

// fire the producers every second; 
setInterval(fireProducer, 1000); 
