1.create a project folder and open in the vs code
2.create two folders frontend and backend
3.install package.json in the root folder by using  [ npm init -y ] command
4.install the vite package in the frontend folder by using [ npm install vite@latest ] command

# INSTALL PACKAGES
5.install packages for the project in root folder :  npm install pakages-name .......
  a. express- for creating the server
  b. dotenv- for using the environment variables
  c. cookie-parser- for parsing the cookies
  d. bcrypt- for hashing the password
  e. jsonwebtoken- for creating the token
  f. mongoose- for connecting the mongodb
  g. cors- for allowing the cross-origin requests
  h. nodemon- for running the server [ npm install nodemon --save-dev]
  i. socket.io- for creating the socket connection 

6. create a .env file in the root folder and add the environment variables 

## CREATE THE SERVER SETUP
7. create a server.js file in the backend folder and write the code for creating the server
     - import the express package 
     - create app object
     - create the port variable using the environment variable
     - activate the port by listening the app object

     - import the dotenv package
     - use dotenv.config() to use the environment variables
     - create the PORT variable using the environment variable -[const   PORT = process.env.PORT || 5000;]

     -import routes from the routes folder

## EDIT IN Package.json File    
8. IN THE PACKAGE.JSON FILE OF THE ROOT FOLDER
   - always change the "main" in the package.json file to "server.js" of the backend folder
   - insert "type": "module" in the package.json file to use the ES6 module syntax "import"
   - create a script "start" in the package.json file and write the command "nodemon server.js"

# GITIGNORE FILE
9. create a .gitignore file in the root folder and add the node_modules folder

# ENVIRONMENT VARIABLE
10. create a .env file in the root folder and add the environment variables

# CREATE ROUTES
11. create routes folder in the backend folder and create the auth.js file
    - import the express package
    - create the router object
    - create the routes for the register, login, and logout
    - export the router object

# CREATE CONTROLLERS
12. create a controllers folder in the backend folder and create the [auth.js] file
     - create the register, login, and logout functions
      - export the functions

# CREATE A DATABASE AND CONNECT IT TO MONGODB [DB]   
13.  create a database folder in the backend folder and create the [connectToMongoDB.js] file
     - import the mongoose package
     - create the connectDB function using the [mongoose.connect] and the environment variable MONGO URI connection string in the .env file
        --use the [await mongoose.connect] to connect to the database in the try block
        --use the [console.log] to print the message if the connection is successful
        --use catch block to print the error message if the connection is not successful
     - export the connectDB function 
     use it in the server.js file to connect

# CREATE MODELS (TABLES) [models]       
14. create a models folder in the backend folder and create the user.js / connect to database file
     - import the mongoose package
     - create the tablenameSchema using the [mogoose.Schema]
       - write the properties of the userSchema eg. name, username, password
     - create the userModel using the [mongoose.model]
     - export the userModel  

# SIGNUP ENDPOINTS [controller]
   -  get the name, username, password, confirmPassword,gender from the request body
   -  check if the password=== confirmpassword. If false ,give output as they dont match
   -  check if user already exists in the User table by using [User.find(username)]
   -  if its New User
     -- salt and hash the password
     -- create an newUser object with all the details  e.g. username , gender, set the password to hashedpassword, and avatar baseed on gender
     -- save the newUser to the User table
     -- generate token and cookies only after saving the user details
     -- send json respose with user details


    ## HASHING PASSWORD [Controller]
    -import bcryptjs  as bcrypt to use [bcrypt.genSalt] for salting and [bcrypt.hash] for hashing password [bcrypt.compare] to compare passwords and hashed passwords

   ## JWT TOKEN [generateToken.js]
    -import jsonwebtoken library  as [jwt] in a separate file in utils folder
    -create a function generateTokenAndSetCookie and parameters of userID 
    -create a Token using method [jwt.sign] along with JWT secret
    -assign  duration of expiry 
    -SET cookie and send response
    -export the default function
  [TEST_IN_POSTMAN] set the POST appropriately as defined in routes

# LOGIN ENDPOINTS  
  -  get username and password from request body
  -  check in the User model if username exits using [User.findOne(username)]
  -  check if entered password is same as existing password by using [bcrypt.compare]
  -  if either of the username or password is false give the output as [credentials_invalid]
  -  if username and password are correct :
     -- generate a Token
     -- send json response 
  -  catch error if any using try catch block
  - always export the function
  [TEST_IN_POSTMON]  using Post method both same as in routes 

# LOGOUT ENDPOINTS
 - clear the cookies by setting the jwt to an empty string and the maxAge as 0
 - show the Logout Succesfull message

# MESSAGE MODEL
 - import mongoose 
 - definse the schema for model
 - create the Message model
 - export the mdel

# CONVERSATION MODEL
 - import mongoose 
 - definse the schema for model
 - create the Message model
 - export the mdel

# SEND MESSAGE ENDPOINT

# PROTECT ROUTE MIDDLEWARE

# 




