# node_producer_consumer_challenge

Build a simple Producer/Consumer system. In this system the Generator will send a series of random arithmetic expressions, while the Evaluator will accept these expressions, compute the result and then report the solution to the Generator.

Requirements:
===================

At a minimum, we would like to see the following implemented:

* The Producer and Consumer as separate NodeJS services.
* The Producer generating random addition expressions of two positive integers, e.g. "2+3="
* The Consumer computing and returning the correct mathematical result for the each expression it receives
* The Consumer successfully processing requests from two Producers concurrently at a rate of at least 1 req/sec from each Producer (2 req/sec in aggregate)
* The Consumer and Producer should log all messages they generate and receive.
* You are free to support more than simple addition, but it is not required.

The end product should:
===================

* Be built in strict JavaScript and run with NodeJS
* NOT rely on any external services like Redis, ZeroMQ or similar technologies
* NOT use Express (Connect is Ok)
* Include UML Activity Diagram and UML Sequence Diagram documenting the business logic
* Include Unit tests


Setup Instructions: 
====================

1. Ensure Node JS is installed, run node -v to get the version, I'm running 'v0.10.32' 
2. Ensure all the dependencies are installed: npm install 

To Run:
==========

1. node runner.js
	This class triggers the consumer and producers

To Test: 
===========

Documents: 
===========

Uml documents are in ./docs/ 

About this program
===================

A typical Producer/Consumer problem deals with concurrency by having a bounded buffer or queue where the producer uses a semophore (sleeps) until the queue has room for data, then it produces it. The client then cleans through the queue consuming everything until the queue is empty, then when it is, it sleeps. 

Without external services like Redis or ZeroMQ, you have few options for this: 

1. Build your own queuing service, like Zero MQ. I felt this was opposite of the requirements. 

2. Implement a shared pool in Mongo or other database, where the consumer would read and the producers would write. Again I felt that hte requirements would not allow for this (NOT rely on any external services). 

3. Have the producer send their product to the consumer. The obvious problems to this are: 

A. Not truly concurrent. You can't have N number of producers and X number of consumers. 

B. The consumer can get overwhelmed. 

4. Create a socket connection to each service, then create global memory space that they all shared. I think all the concerns of # 3 would still apply. 