//bringing in mongoose
const mongoose = require('mongoose'); //mongo db driver 
const express = require('express'); 

const bodyParser = require('body-parser');    
const app = express()


const blogRouter = require('./routes/reciperoutes')
const Recipes = require('./model/schema');

const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true})); //JSON middleware. 
app.use(methodOverride('_method')); //moduel to help override form methods for updating documents. 

//using method override


//Connecting to MongoDB
mongoose.connect("mongodb://localhost:27017/mongoosetutorial"), { //connect to mongodb
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true // enabling queries to be faster
    // line 17 & 18 = all connections will be made on one port
}



//Get route responsible for sending ejs file on page load
app.get('/', async function(req,res){
    let recipePost = await  Recipes.find().sort({ timeCreated:'desc' });

     res.render('index', {recipePost:recipePost}) //once landed on domain renders index.ejs.
})



app.use(express.static("public")) //middleware for accessing files from the folder using http.
app.use('/recipe', blogRouter); //line ten enables me to use the '/recipe' 

//listening port
app.listen(5000);













































//post route responsible for adding documents to the database
// app.post('/addto', function(req, res){
//     mongoose.connect(database).then(()=>{
//         console.log("db success!")
//         let addRecipe = new recipes({
//             recipeName: req.body.name,
//             author: req.body.author,
//             recipe: req.body.recipe,
//             tips: req.body.tips       
//         })

//         addRecipe.save(function(err){
//             console.log("Recipe Added!");
//             console.log("success!")
//             res.redirect('/')
//         })
//         console.log(req.body);
//     })
// })


// app.get('/find', (req, res)=>{
//     mongoose.connect(database).then(()=>{
//         console.log('find route')

//         recipes.find({}, (err, result)=>{
//             if(err){
//                 throw err
//             } else {
//                 console.log(result);
//                 res.send(result);
//             }
//         })
//     })
// })

// //responsible for rendering added recipes to a ejs page
// app.get('/retrieve', function(req, res){
    
//     mongoose.connect(database).then(()=>{
//         let recipeArray = []

//         recipes.find({}, (err, result)=>{
//             result.forEach((recipe)=>{
//                 recipeArray.push(recipe)
//                 console.log(recipeArray)
//             })
//             res.render('index.ejs', {object:recipeArray});
//             console.log("recipe on page!")
//         })
//     })
// })



// app.delete('/delete/:id',  function(req, res){
    
//     mongoose.connect(database).then(()=>{
//        console.log('hello')
//         recipes.findByIdAndRemove(req.params.id)
                   
//     })
  
// })





