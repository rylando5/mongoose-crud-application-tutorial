//file is responsible for communicating directly with the database.
const mongoose = require('mongoose'); //mongoose module
const slug = require('mongoose-slug-generator'); //slug generator|intuitive schema based declaration
const domPurifier = require('dompurify'); //module for stripping out html
const {JSDOM} = require('jsdom'); //library for parsing and interacting with html
const htmlPurify = domPurifier(new JSDOM().window);  //sanitizing html

const stripHtml = require('string-strip-html'); //stripping html tags out of text.

//inti slug plugin
mongoose.plugin(slug)
//Structure of our data
const recipeSchema = mongoose.Schema({
    recipeName: {
       type: String, 
       required: true,
    },
    author: {
        type: String,
        required: true,
    },
     
    recipe:{
       type: String,

    },
    tips:{
      type: String, 
    },
    timeCreated:{
        type: Date,
        default:()=>Date.now(),
    }, 
    snippet:{
        type: String,
    },
    img:{
        type: String,
        default:"placeholder.jpg",
    },
    slug: {
        type:String,slug:"recipeName", unique:true, slug_padding_size:2
    },
    
})

//function meant for sanitizing recipe description for a snippet that we will render on index.ejs
recipeSchema.pre('validate', function(next){ // checks if recipe is present
    //checking if there is a description 
    if(this.recipe){ //if it is present
        this.recipe = htmlPurify.sanitize(this.recipe); //sanitizes and purifies it to avoid xss attacks 
        this.snippet = stripHtml(this.recipe.substring(0,200)).result; //saves a snippet of text from where
        //the validation left off. 
    } 

    next(); //saves the blog post
});

module.exports = mongoose.model("Recipes", recipeSchema); //exporting our schema as an object "Recipes"
//export statement is used for creating javascript modules to export live db bindings to functions. 


