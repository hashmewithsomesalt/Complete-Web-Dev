/*
Request: When a device asks for a "resource"
(data, image, HTML page, authentication token, etc.)
Requires a connection to the internet somehow

Response: The reply to the request
could contain the resource (HTML, JSON data, etc.)
asked for by the client
could contain a response saying the client isn't
authorized to receive the resource

STATUS 200: OK
STATUS 403: Forbidden

3 things your computer might request from a server
-JSON array of suggested videos
-video stream
-index.html

Main job of a server: Receive a request from the client
and return a response

Self Study: What would the 3 digit server response
code be if the server experiences an internal
server error? 500
 */