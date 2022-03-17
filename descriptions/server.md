server.js file first starts by requiring mongoose library as well as the express library 

Mongoose Library
-  a driver for our mongoDB to simplify syntactical interactions with our database. 

Express Library
- The express module is middleware-based. Meaning that it basically will funnel incoming requests through a chain of steps. where it can then do something with that request. 
- the 'app' variable is used to create an instance of express() which will then be used as a router reference in this application. 

The file then requires body-Parser to parse incoming requests into JSON data. (kinda like its translation)

The blogRouter variable is assigned to require another file in another folder in our project folder ./routes/reciperoutes.js that file is solely responsible for handling our routes. it enables us to also use the '/recipe' url route.

const Recipes = require('/model/schema); is referencing our database schema. Enabling us to use that variable throughout our scripts. 


We then set up more middleware that is going to help us parse more incoming requests for JSON data. And overriding form methods for updating documents. 

Next we connect to our mongoDB using localhost:27017/mongoosetutorial as this applications database. Also enabling unified topology so that all connections are made 
on the same port. line 17 & 18.







