---
title: Web application fundamentals
description: The fundamentals of web applications and basic description.
img: Basic idea about apps.png
alt: The fundamentals of web applications and basic description.
published: true
---

<p class="title is-4">Web application fundamentals</p>

<hr>
Here we will discuss very basics of web applications and related terminologies.

We will cover basics of these terminologies: client, server, APIs, databases, request, response, headers, different request methods, status codes, authentication basics.





So lets start with client.

<hr>


<p class="title is-5">Client</p>

Web application works based on [ client server model ]( https://en.wikipedia.org/wiki/Client%E2%80%93server_model ). Client means users browser which initiate request for web page. So first request is initiated by browser and then based on response from server the browser will show content ( HTML, PDF, Images etc based on value in response "content-type" header ).

In mobile and desktop applications we can say client to mobile app or desktop, as it can also call backend API to fetch dynamic JSON data from server.

<hr>


<p class="title is-5">Server</p>

Web server is software which listen for request from browser/client and return response based on request URL, headers and parameters. The common web server are [ Apache ]( https://httpd.apache.org/ ) and [ Nginx ]( https://www.nginx.com/ ).

Server can serve static files like CSS/HTML/JS files or it can communicate with server side scripting languages like PHP, NodeJS, Python etc and return response accordingly.



<hr>


<p class="title is-5">Request and Response</p>

Request means an action to communicate with server. For ex. if your open any web page then it is simply GET request which returns HTML with related CSS and JS files and if your submitting form then it is simply POST request with payload (Data which are you entered in form). 

So POST request is useful to send data and files (For EX. profile picture) to server and GET request is useful to simply GET data (HTML, JSON, PDF, Image etc) from server.

Now response is the returned data from server after trigger request. So for Ex. if your calling GET request to get some data then the data returned by server is called response.

Appart from GET and POST there are also [ other methods ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) available. like DELETE, PUT, HEAD, OPTIONS etc.. 

Response can have different [ status code ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) like if all goes ok then it will return requested data with status code 200 but for ex. your requesting user profile page without login then it will simply return redirect response to login page with status code 301.


<hr>


<p class="title is-5">Headers</p>

[ Header ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) is used to pass details which are common for all requests. for ex. if authentication is session-cookie based then cookie should be passed in every GET/POST requests to authenticate user and so cookie is generally passed in headers. Same for token based authentication, token in generally passed in header named Authorization when authentication is token based. 


<hr>


<p class="title is-5">APIs</p>

Web API means type of request which simply return JSON or XML response based on request url, headers and parameters. Few use cases of calling APIs are, it can be called by one server to other server for get data from other server or to modify data on other server, web browser to backend server, mobile application to backend server etc...


<hr>


<p class="title is-5">Database</p>

Database is used to store data which are dynamic. For ex. list of users who subscribed for blogs or list of students in school management system etc. Generally server side scripting language is communicating with database and store/fetch data based on request. For ex. if we call request to get list of users then first web server listen it and pass it to scripting language (PHP, Nodejs or any server side scripting language) and then scripting language trigger query to fetch user list from database and then pass data to web server (HTML of list or simply JSON array) and then web server pass data to web browser/client. 

There are different kind of databases available like [ MySql ](https://www.mysql.com/), [ Sql ](https://www.microsoft.com/en-us/sql-server), [ MongoDB ](https://www.mongodb.com/) etc...



<hr>


<p class="title is-5">Authentication basics</p>

In web application there are generally two types of authentication available. One is session-cookie based authentication and other is token based authentication. Session-cookie based authentication is also called state-full authentication where as token based authentication known as stateless authentication.

Generally in session based authentication, on successfully user login system will generate session on server side and store that session ID in cookie. so all next requests will be authenticated using that session ID which is stored in cookie. 

In token based authentication client will call token API and pass username/password in that API, if credentials are valid then system will return access token which is simply long enough random string or JSON token in case of [ JWT ](https://jwt.io/). Access token will have some expiration time or in some case it will be without expire time based on requirements. Once client has access token it can call API using that access token, and server will simply check token and if valid will return/store data based on request type. 


For get better understanding on above, you can use developer tool of chrome browser or firefox browser and play with any web applications which your using daily.  


Thanks very much for reading and hope now you have basic idea about how web applications works, cheers! 😄
