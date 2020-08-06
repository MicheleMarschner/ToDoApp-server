class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
  }


  

const handleError = (err, req, res, next) => {
  let error = { ...err };
  let { statusCode, message, stack, name, value, code, errors } = err;

  error.message = message;

  console.log(stack);

  //Mongoose bad objectId
  if (name === 'CastError') {
    const msg = `No Ressource found with id of ${value}`;
    error = new ErrorHandler(msg, 404);
  }

  //Mongoose validation error 
  if(name === 'ValidationError') { 
    const msg = Object.values(errors).map(val => val.message);
    error = new ErrorHandler(msg, 400);
  }
  
  res.status(statusCode || 500).json({
    status: "error",
    error: error.message || 'Server Error'
  });
};


module.exports = { ErrorHandler, handleError }