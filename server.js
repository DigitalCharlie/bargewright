/////////////////////////////////////////////
// Import Our Dependencies 
/////////////////////////////////////////////
require('dotenv').config(); // Loads Env vars into process.env
const express = require('express'); 
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const userController = require('./controllers/users')
const cookieParser = require('cookie-parser')

/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); // logging
app.use(express.urlencoded({extended:true}));  // parse urlencoded request bodies
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.static("public")); // serve files from public statically
app.use(cookieParser());

/////////////////////////////////////////////////////
// Routing
/////////////////////////////////////////////////////

app.get("/", (req,res) => {
    res.send("Welcome to The Bargewright Inn")
});

app.use('/', userController); // tells user route to use user controller



//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));