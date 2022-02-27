const mongoose=require('mongoose'); //requiring mongoose
//connection string
var dbURI="mongodb+srv://sajaad6399:HTMLu135dx@cluster0.ut8a7.mongodb.net/myMovies?retryWrites=true&w=majority";

mongoose.connect(dbURI,{    //connecting mongoose database
    dbName:'myMovies',
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
  });
  mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
  
   require('./movies');
