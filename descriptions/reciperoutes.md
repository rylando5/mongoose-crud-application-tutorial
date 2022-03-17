This file is strictly responsible for handling our routes in this application. 

we acquire the express module. 

We then create an object called recipe which is already connected to our schema object in the model folder. 

the router object will be used to create new route objects within the program. 

the first .get route is used to render the new.ejs page/route along with the recipe route on line 15 on 'index.ejs'.


The following .get route is using the slug module. We add our slug module to our database schema on line 41 & 42 on 'schema.js', in the models folder. The slug we are using is the "recipeName".

The route is looking for the a recipe with the slug recipePost,
if it finds one it will then continue to run line 19. Which  makes an await to the idea that we are retrieving data from our Recipe model. Meaning that this line will not run unless the promise is met, when it is met it then renders the show.ejs template and passes the recipePost variable. If all fails it will then redirect you to the home page. 

The code takes in a request parameter called slug, which will be passed into the recipe findOne method, and returns an object containing the properties of that particular recipe if it exists.

The following .post route makes a request to the '/' home route.  It then creates a new recipe object with key properties. The key properties are the  input names in our form and our recipeSchema's contents. 

 that form has the action of 'recipe/'. It then awaits and saves it into the database. It then redirects to the 'recipe/' route with our content objects slug and our content object slug will always be the title of our recipe. 
 reference line 41 & 42 in 'schema.js'.

This route is part 1/2 of the update. 

The following .get route  finds a recipePost by its id of the request. if it finds one it renders a edit.ejs file with the recipePost variable along with it. 

part 2/2 of the update

router.put
This route is responsible for updating a recipe of our choice. The code takes a request and returns an object with properties of recipeName author and recipe (the items we are trying to update). It then checks if there is an existing recipe with the matching names author and recipe. If not it creates one then it updates the existing one. It then redirects back to the home route. 


The following route.delete takes the form action of post and uses our method override module to post a delete method on the recipeBlog.id





<form action = "/recipe/<%= recipeBlog.id %>?_method=DELETE" method = "POST">
        <button class = "delete"><i class="fa fa-trash-o" style="font-size:15px"></i></button>
        </form>