//Recipe routes.
const express = require('express'); //express module|handles req,res cycles
const recipe = require('./../model/schema'); //recipe module thats connected to our schema object.
const router = express.Router(); //used for creating new route object within the program.


router.get('/new', function (req, res){
    res.render('new')

})

/*       view route
using the slug module for being able to identify a resource  in a human readable way.
Using a part of the url to that explains parts of the page content.
*/

router.get('/:slug', async (req, res) => { //async function returns promise rather than a value
    //slug module enables me to use the title of the recipe in the url path
   let recipePost = await recipe.findOne({slug:req.params.slug}); //finding a recipe and returning a promise
   if(recipePost){ //if no post
       res.render('show', {recipePost: recipePost}) //renders show.ejs, with a recipePost object
   } else{
       res.redirect('/'); //if not redirect to the home route
   }
})



//routes that handles new post
router.post('/', async (req, res) =>{
    console.log(req.body)
    // generates content from the post / to the index.ejs's /recipe/new routes form body
    let content = new recipe({
        recipeName: req.body.name,
         author: req.body.author,
        recipe: req.body.recipe,
        tips: req.body.tips
    });

    try{
        console.log(content.id); //generates id
        content = await content.save() //saves to db
        res.redirect(`recipe/${content.slug}`) //redirects to the server.js line 33 reference with the url slug
        //also matches any requests for recipes that have a slug of :slug in our db
    } catch(err) {
        console.log(err)
    }
    /* we are only interested in handling POST requests so our function wont take
    any other parameters or return anything else but a true or false */
})


//update route
router.get('/edit/:id', async(req, res) => { //handles req to this endpoint,
    console.log('hello world')
    let recipePost = await recipe.findById(req.params.id); //finding requested recipe by id
    if(recipePost){ //if true
        res.render('edit', {recipePost: recipePost}); //renders the edit view,
        console.log(recipePost)
    } else{
        console.log(err);
    }

})


//route to handel update
router.put('/:id', async (req, res)=>{ //editing the specific id
    req.recipePost = await recipe.find({"_id":req.params.id}) 
    let recipePost = req.recipePost;
    
    //recipePost._id = req.params.id;
    recipePost.recipeName = req.body.recipeName; //takes in the new req.body felids
    recipePost.author = req.body.author;
    recipePost.recipe = req.body.recipe;
    console.log(recipePost.recipeName);
    //console.log(recipeName);
    try{
        await recipe.updateOne({"_id":req.params.id},{$set: {"recipeName":recipePost.recipeName, "author":recipePost.author, "recipe":recipePost.recipe}}); 
        res.redirect(`/`); //redirects
        console.log(recipePost) 
    } catch(error) {
        console.log(error); 
        res.redirect(`/`); 
    }

});


//Delete Route
router.delete('/:id', async(req, res)=>{
    await recipe.findByIdAndDelete(req.params.id);
    res.redirect('/');
})











// let query = {name:"matt"}
// let newdata =  {recipePost.recipeName =
//req.body.recipeName; //takes in the new req.body felids
//recipePost.author = req.body.author;
//recipePost.recipe = req.body.recipe;
// }
// MyModel.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
//     if (err) return res.send(500, {error: err});
//     return res.send('Succesfully saved.');
// });

module.exports = router;

/*


*/