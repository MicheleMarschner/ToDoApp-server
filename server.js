const express = require('express');
const dotenv = require('dotenv');
const { handleError } = require('./middleware/errorHandler');
const toDoRouter = require('./routes/toDos');
const connectDB = require('./config/db');

dotenv.config( { path: './config/config.env' } );
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;


//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/api/todos', toDoRouter);
app.get('/favicon.ico', (req, res) => res.status(204));
/*app.get((req, res,) => {
  let err = new Error(`${req.ip} tried to reach ${req.originalUrl}`); // Tells us which IP tried to reach a particular URL
  err.statusCode = 404;
  res.render('myErrorPage') // Renders a myErrorPage.html for the user
});*/

app.use(handleError);
    

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}.`);
});




