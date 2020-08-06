const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true, 
            useUnifiedTopology: true
        });
        // mongoose.connect(like above)
        //const db = mongoose.connection;
        //db.on('error', console.error.bind(console, 'connection error'));
        //“once” is like on but just for one time
        //db.once('open', function() {console.log('the connection is open')});

        console.log(`MongoDB connected: ${conn.connection.host}.`);
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}


module.exports = connectDB;