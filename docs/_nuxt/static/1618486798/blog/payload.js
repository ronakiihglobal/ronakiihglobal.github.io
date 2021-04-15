__NUXT_JSONP__("/blog", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{article:[{slug:v,description:n,title:m,img:o,alt:m,published:w,toc:[{depth:x,text:m}],body:{type:p,children:[{type:b,tag:y,props:{className:[e,q]},children:[{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:n}]}]},dir:r,path:"\u002Farticles\u002Fcoming-soon",extension:s,createdAt:"2021-04-01T10:54:34.139Z",updatedAt:"2021-04-09T09:11:27.194Z"},{slug:"test",description:"Working on it ...",title:z,img:o,alt:z,published:false,toc:[{depth:x,text:A}],body:{type:p,children:[{type:b,tag:y,props:{className:[e,q]},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Working on it..."}]}]},dir:r,path:"\u002Farticles\u002Ftest",extension:s,createdAt:"2021-04-02T12:45:51.223Z",updatedAt:"2021-04-09T09:26:58.642Z"},{slug:B,description:t,title:u,img:C,alt:t,published:w,toc:[],body:{type:p,children:[{type:b,tag:d,props:{className:[e,q]},children:[{type:a,value:u}]},{type:a,value:c},{type:b,tag:k,props:{},children:[]},{type:a,value:"\nHere we will discuss very basics of web applications and related terminologies.\n"},{type:b,tag:d,props:{},children:[{type:a,value:"We will cover basics of these terminologies: client, server, APIs, databases, request, response, headers, different request methods, status codes, authentication basics."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So lets start with client."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"Client"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Web application works based on "},{type:b,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FClient%E2%80%93server_model",rel:[g,h,i],target:j},children:[{type:a,value:" client server model "}]},{type:a,value:". Client means users browser which initiate request for web page. So first request is initiated by browser and then based on response from server the browser will show content ( HTML, PDF, Images etc based on value in response \"content-type\" header )."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In mobile and desktop applications we can say client to mobile app or desktop, as it can also call backend API to fetch dynamic JSON data from server."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"Server"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Web server is software which listen for request from browser\u002Fclient and return response based on request URL, headers and parameters. The common web server are "},{type:b,tag:f,props:{href:"https:\u002F\u002Fhttpd.apache.org\u002F",rel:[g,h,i],target:j},children:[{type:a,value:" Apache "}]},{type:a,value:" and "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.nginx.com\u002F",rel:[g,h,i],target:j},children:[{type:a,value:" Nginx "}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Server can serve static files like CSS\u002FHTML\u002FJS files or it can communicate with server side scripting languages like PHP, NodeJS, Python etc and return response accordingly."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"Request and Response"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Request means an action to communicate with server. For ex. if your open any web page then it is simply GET request which returns HTML with related CSS and JS files and if your submitting form then it is simply POST request with payload (Data which are you entered in form)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So POST request is useful to send data and files (For EX. profile picture) to server and GET request is useful to simply GET data (HTML, JSON, PDF, Image etc) from server."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now response is the returned data from server after trigger request. So for Ex. if your calling GET request to get some data then the data returned by server is called response."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Appart from GET and POST there are also "},{type:b,tag:f,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FMethods",rel:[g,h,i],target:j},children:[{type:a,value:" other methods "}]},{type:a,value:" available. like DELETE, PUT, HEAD, OPTIONS etc.."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Response can have different "},{type:b,tag:f,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus",rel:[g,h,i],target:j},children:[{type:a,value:" status code "}]},{type:a,value:" like if all goes ok then it will return requested data with status code 200 but for ex. your requesting user profile page without login then it will simply return redirect response to login page with status code 301."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"Headers"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FHeaders",rel:[g,h,i],target:j},children:[{type:a,value:" Header "}]},{type:a,value:" is used to pass details which are common for all requests. for ex. if authentication is session-cookie based then cookie should be passed in every GET\u002FPOST requests to authenticate user and so cookie is generally passed in headers. Same for token based authentication, token in generally passed in header named Authorization when authentication is token based."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"APIs"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Web API means type of request which simply return JSON or XML response based on request url, headers and parameters. Few use cases of calling APIs are, it can be called by one server to other server for get data from other server or to modify data on other server, web browser to backend server, mobile application to backend server etc..."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"Database"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Database is used to store data which are dynamic. For ex. list of users who subscribed for blogs or list of students in school management system etc. Generally server side scripting language is communicating with database and store\u002Ffetch data based on request. For ex. if we call request to get list of users then first web server listen it and pass it to scripting language (PHP, Nodejs or any server side scripting language) and then scripting language trigger query to fetch user list from database and then pass data to web server (HTML of list or simply JSON array) and then web server pass data to web browser\u002Fclient."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are different kind of databases available like "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.mysql.com\u002F",rel:[g,h,i],target:j},children:[{type:a,value:" MySql "}]},{type:a,value:D},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.microsoft.com\u002Fen-us\u002Fsql-server",rel:[g,h,i],target:j},children:[{type:a,value:" Sql "}]},{type:a,value:D},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.mongodb.com\u002F",rel:[g,h,i],target:j},children:[{type:a,value:" MongoDB "}]},{type:a,value:" etc..."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"Authentication basics"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In web application there are generally two types of authentication available. One is session-cookie based authentication and other is token based authentication. Session-cookie based authentication is also called state-full authentication where as token based authentication known as stateless authentication."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Generally in session based authentication, on successfully user login system will generate session on server side and store that session ID in cookie. so all next requests will be authenticated using that session ID which is stored in cookie."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In token based authentication client will call token API and pass username\u002Fpassword in that API, if credentials are valid then system will return access token which is simply long enough random string or JSON token in case of "},{type:b,tag:f,props:{href:"https:\u002F\u002Fjwt.io\u002F",rel:[g,h,i],target:j},children:[{type:a,value:" JWT "}]},{type:a,value:". Access token will have some expiration time or in some case it will be without expire time based on requirements. Once client has access token it can call API using that access token, and server will simply check token and if valid will return\u002Fstore data based on request type."}]}]},dir:r,path:"\u002Farticles\u002Fweb-application-fundamentals",extension:s,createdAt:"2021-04-09T09:25:04.754Z",updatedAt:"2021-04-15T11:39:41.381Z"}],articles:[{slug:v,description:n,title:m,img:o},{slug:B,description:t,title:u,img:C}]}],fetch:{},mutations:void 0}}("text","element","\n","p","title","a","nofollow","noopener","noreferrer","_blank","hr","is-5","Coming soon...","Working on it and it will available for you soon!","in-progress.jpeg","root","is-4","\u002Farticles",".md","The fundamentals of web applications and basic description.","Web application fundamentals","coming-soon",true,3,"h3","Test...","Test","web-application-fundamentals","Basic idea about apps.png",", ")));