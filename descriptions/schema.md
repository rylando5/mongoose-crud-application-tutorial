This file is responsible for communicating directly with the database. 

It starts by requiring the mongoose module. Which is used to connect to mongoDB! 

We then use a module called ('mongoose-slug-generator')
what is mongoose-slug-generator?

- it is firstly a mongoose plugin for creating slugs. A slug is a human readable identifier. 

- You will use a slug for when you want to refer to a item while preserving the ability to what the item is at a glance. 

- These identifiers are used in the URL. 

We then require a few more libraries. 
domPurifier is required so that html tags can be removed from any posts before they are saved into mongoDB. 

Then, jsdom and JSDOM are required so that HTML documents can be parsed and interacted with from within NodeJS code.

what is jsdom and JSDOM?
it is a library that parses and interacts with assembled HTML. A lot like the browser. However the benefit is that it isn't actually a browser. Instead it just implements web standards like browsers do. Whatever html it is fed it will parse. 

Line 8 then uses the string-strip-html library to strip html tags out of text. 

We then connect to mongoose and add the slug plugin that will automatically generate a slug for when the document is valid based off the template string passed. 

With the module's out of the way We then go onto defining our schema. This schema will describe how we structure our applications data to be stored in mongoDB. 

The validation function is used to check if there is a description('recipe') present in the schema. Along with also sanitizing the recipe description for a snippet that we will use on our home page 

we then strip the html out of our snippet and only display the first 200 characters. 
