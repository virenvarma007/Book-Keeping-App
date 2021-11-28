const express = require('express')
const dotenv=require('dotenv')
const error=require('./middleware/errormiddleware')
const usersRoute=require('./routes/usersRoutes.js')
const bookRoute=require('./routes/bookroutes')
const app = express();
dotenv.config();
require('./config/dbConnect')();
app.use(express.json()); //incoming data as JSON Object

//Routes
app.use('/api/users',usersRoute);
app.use('/api/books',bookRoute);

//Errors
app.use(error.errorMiddlewareHandler);

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});