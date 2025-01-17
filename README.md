Following example tutorial:
https://www.youtube.com/watch?v=BWUi6BS9T5Y&ab_channel=TomDoesTech

## Technologies
 - node js
 - MongoDB with Mongoose
 - TypeScript
 - Express.js & Express.js middleware
 - Zod validation

## What is REST
REST stands for Representational State Transfer, a term coined by Roy Fielding in 2000. It is an architecture style for designing loosely coupled applications over the network, that is often used in the development of web services.



### Anatomy of REST:
Endpoint: it is the URL where the REST Server is listening.
Method: REST implements multiple 'methods' for different types of request, the following are most popular:
- GET: Get resource from the server.
- POST: Create resource to the server.
- PATCH or PUT: Update existing resource on the server.
- DELETE: Delete existing resource from the server.

**Headers**: The additional details provided for communication between client and server (remember, REST is stateless). Some of the common headers are:
Request:
- host: the IP of client (or from where request originated)
- accept-language: language understandable by the client
- user-agent: data about client, operating system and vendor
Response:
- status: the status of request or HTTP code.
- content-type: type of resource sent by server.
- set-cookie: sets cookies by server

**Data**: (also called body or message) contains info you want to send to the server.

## Mission

Build out post CRUD operations:
 
 - HTTP endpoint
 - middleware
 - controller
 - service
 - database

## Explanation
```ts
    app.post('/api/users', validateResource(createUserSchema), createUserHandler)
```

validateResource handles the middleware and checks if the user schema is valid, then if data is valid createUserHandler is called (located in controller dir), 


**utils** represent the functional code used accross the REST api.


## REST Specific HTTP Status Codes
 - 1xx Status Codes [Informational]
 - 2xx Status Codes [Success]
 - 3xx Status Codes [Redirection]
 - 4xx Status Codes (Client Error)

#### 200 (OK)
It indicates that the REST API successfully carried out whatever action the client requested and that no more specific code in the 2xx series is appropriate.

Unlike the 204 status code, a 200 response should include a response body. The information returned with the response is dependent on the method used in the request, for example:

 - GET an entity corresponding to the requested resource is sent in the response;
 - HEAD the entity-header fields corresponding to the requested resource are sent in the response without any message-body;
 - POST an entity describing or containing the result of the action;
 - TRACE an entity containing the request message as received by the end server.

### 201 (Created)
A REST API responds with the 201 status code whenever a resource is created inside a collection. There may also be times when a new resource is created as a result of some controller action, in which case 201 would also be an appropriate response.

The newly created resource can be referenced by the URI(s) returned in the entity of the response, with the most specific URI for the resource given by a Location header field.

The origin server MUST create the resource before returning the 201 status code. If the action cannot be carried out immediately, the server SHOULD respond with a 202 (Accepted) response instead.
AD

### 202 (Accepted)
A 202 response is typically used for actions that take a long while to process. It indicates that the request has been accepted for processing, but the processing has not been completed. The request might or might not be eventually acted upon, or even maybe disallowed when processing occurs.

Its purpose is to allow a server to accept a request for some other process (perhaps a batch-oriented process that is only run once per day) without requiring that the user agent’s connection to the server persist until the process is completed.

The entity returned with this response SHOULD include an indication of the request’s current status and either a pointer to a status monitor (job queue location) or some estimate of when the user can expect the request to be fulfilled.
AD

### 204 (No Content)
The 204 status code is usually sent out in response to a PUT, POST, or DELETE request when the REST API declines to send back any status message or representation in the response message’s body.

An API may also send 204 in conjunction with a GET request to indicate that the requested resource exists, but has no state representation to include in the body.

If the client is a user agent, it SHOULD NOT change its document view from that which caused the request to be sent. This response is primarily intended to allow input for actions to take place without causing a change to the user agent’s active document view. However, any new or updated metainformation SHOULD be applied to the document currently in the user agent’s dynamic view.

The 204 response MUST NOT include a message-body and thus is always terminated by the first empty line after the header fields.

### 301 (Moved Permanently)
The 301 status code indicates that the REST API’s resource model has been significantly redesigned, and a new permanent URI has been assigned to the client’s requested resource. The REST API should specify the new URI in the response’s Location header, and all future requests should be directed to the given URI.

You will hardly use this response code in your API as you can always use the API versioning for the new API while retaining the old one.
AD

### 302 (Found)
The HTTP response status code 302 Found is a common way of performing URL redirection. An HTTP response with this status code will additionally provide a URL in the Location header field. The user agent (e.g., a web browser) is invited by a response with this code to make a second. Otherwise identical, request to the new URL specified in the location field.

Many web browsers implemented this code in a manner that violated this standard, changing the request type of the new request to GET, regardless of the type employed in the original request (e.g., POST). RFC 1945 and RFC 2068 specify that the client is not allowed to change the method on the redirected request. The status codes 303 and 307 have been added for servers that wish to make unambiguously clear which kind of reaction is expected of the client.
AD

### 303 (See Other)
A 303 response indicates that a controller resource has finished its work, but instead of sending a potentially unwanted response body, it sends the client the URI of a response resource. The response can be the URI of the temporary status message, or the URI to some already existing, more permanent, resource.

Generally speaking, the 303 status code allows a REST API to send a reference to a resource without forcing the client to download its state. Instead, the client may send a GET request to the value of the Location header.

The 303 response MUST NOT be cached, but the response to the second (redirected) request might be cacheable.

### 304 (Not Modified)
This status code is similar to 204 (“No Content”) in that the response body must be empty. The critical distinction is that 204 is used when there is nothing to send in the body, whereas 304 is used when the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.

In such a case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.
AD

Using this saves bandwidth and reprocessing on both the server and client, as only the header data must be sent and received in comparison to the entirety of the page being re-processed by the server, then sent again using more bandwidth of the server and client.

### 307 (Temporary Redirect)
A 307 response indicates that the REST API is not going to process the client’s request. Instead, the client should resubmit the request to the URI specified by the response message’s Location header. However, future requests should still use the original URI.

A REST API can use this status code to assign a temporary URI to the client’s requested resource. For example, a 307 response can be used to shift a client request over to another host.

The temporary URI SHOULD be given by the Location field in the response. Unless the request method was HEAD, the entity of the response SHOULD contain a short hypertext note with a hyperlink to the new URI(s). If the 307 status code is received in response to a request other than GET or HEAD, the user agent MUST NOT automatically redirect the request unless it can be confirmed by the user, since this might change the conditions under which the request was issued.

### 400 (Bad Request)
400 is the generic client-side error status, used when no other 4xx error code is appropriate. Errors can be like malformed request syntax, invalid request message parameters, or deceptive request routing etc.
AD

The client SHOULD NOT repeat the request without modifications.

### 401 (Unauthorized)
A 401 error response indicates that the client tried to operate on a protected resource without providing the proper authorization. It may have provided the wrong credentials or none at all. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.

The client MAY repeat the request with a suitable Authorization header field. If the request already included Authorization credentials, then the 401 response indicates that authorization has been refused for those credentials. If the 401 response contains the same challenge as the prior response, and the user agent has already attempted authentication at least once, then the user SHOULD be presented the entity that was given in the response, since that entity might include relevant diagnostic information.

### 403 (Forbidden)
A 403 error response indicates that the client’s request is formed correctly, but the REST API refuses to honor it, i.e., the user does not have the necessary permissions for the resource. A 403 response is not a case of insufficient client credentials; that would be 401 (“Unauthorized”).
AD

Authentication will not help, and the request SHOULD NOT be repeated. Unlike a 401 Unauthorized response, authenticating will make no difference.

### 404 (Not Found)
The 404 error status code indicates that the REST API can’t map the client’s URI to a resource but may be available in the future. Subsequent requests by the client are permissible.

No indication is given of whether the condition is temporary or permanent. The 410 (Gone) status code SHOULD be used if the server knows, through some internally configurable mechanism, that an old resource is permanently unavailable and has no forwarding address. This status code is commonly used when the server does not wish to reveal exactly why the request has been refused, or when no other response is applicable.

### 405 (Method Not Allowed)
The API responds with a 405 error to indicate that the client tried to use an HTTP method that the resource does not allow. For instance, a read-only resource could support only GET and HEAD, while a controller resource might allow GET and POST, but not PUT or DELETE.

A 405 response must include the Allow header, which lists the HTTP methods that the resource supports. For example:
AD

Allow: GET, POST
406 (Not Acceptable)
The 406 error response indicates that the API is not able to generate any of the client’s preferred media types, as indicated by the Accept request header. For example, a client request for data formatted as application/xml will receive a 406 response if the API is only willing to format data as application/json.

If the response could be unacceptable, a user agent SHOULD temporarily stop receipt of more data and query the user for a decision on further actions.

### 409 Conflict
Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates.

### 412 (Precondition Failed)
The 412 error response indicates that the client specified one or more preconditions in its request headers, effectively telling the REST API to carry out its request only if certain conditions were met. A 412 response indicates that those conditions were not met, so instead of carrying out the request, the API sends this status code.

### 415 (Unsupported Media Type)
The 415 error response indicates that the API is not able to process the client’s supplied media type, as indicated by the Content-Type request header. For example, a client request including data formatted as application/xml will receive a 415 response if the API is only willing to process data formatted as application/json.

For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.

### 500 (Internal Server Error)
500 is the generic REST API error response. Most web frameworks automatically respond with this response status code whenever they execute some request handler code that raises an exception.

A 500 error is never the client’s fault, and therefore, it is reasonable for the client to retry the same request that triggered this response and hope to get a different response.

The API response is the generic error message, given when an unexpected condition was encountered and no more specific message is suitable.

### 501 (Not Implemented)
The server either does not recognize the request method, or it cannot fulfill the request. Usually, this implies future availability (e.g., a new feature of a web-service API).

## Resource archetypes
Resource archetypes into four categories (documents, collection, store and controller).

#### document 
A document resource is a singular concept that is akin to an object instance or database record.

In REST, you can view it as a single resource inside resource collection. A document’s state representation typically includes both fields with values and links to other related resources.

#### collection
A collection resource is a server-managed directory of resources. A collection of resources.

### store
A store is a client-managed resource repository. Data that is managed by client, they can delete, request for data etc.
```
http://api.example.com/song-management/users/{id}/playlists
```

### controller
A controller resource models a procedural concept. 

Controller resources are like executable functions, with parameters and return values, inputs, and outputs.
```
http://api.example.com/cart-management/users/{id}/cart/checkout
```

## Structure of the folders

### controller
Collection of executable fuctions that preform some sort of action.

### middleware
Functions that are executed between the request and response.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

### models
Models that define how to structure the data in the database.

### schema
Checks that are preformed with the help of Zod on the body of the request to check if the data requested matches the requirements. For example if password is long enough.

### service
Using the worker/manager analogy, the controller is the manager, while the service is the worker.

A controller:
 - manages the incoming work HTTP requests
 - decides which worker what service should do the work
 - splits up the work into sizable units
 - passes that work the necessary data from the HTTP requests off to the service(s)
 - if the work requires multiple people services working on multiple things, orchestrates the work those service calls
 - but does not do the work himself/herself (again, using a basic stereotype here!) (not a stereotype here, the controller shouldn't be doing the work)

And a service:

 - receives the request data it needs from the manager in order to perform its tasks
figures out the individual details algorithms/business logic/database calls/etc involved in completing the request
 - is generally only concerned with the tasks he/she has to complete
not responsible for making decisions about the "bigger" picture orchestrating the different service calls
 - does the actual work necessary to complete the tasks/request
 - returns the completed work a response to the manager

>**Note:** Using services in API's is something I don't often see in Node-land, but is such a powerful addition to the structure of your API that will make it much easier for testing, code organization, and code re-use.

### utils
General utility functions

## res.locals
The res.locals is an object that contains the local variables for the response which are scoped to the request only and therefore just available for the views rendered during that request or response cycle.