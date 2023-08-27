const mongoose = require("mongoose");

const app = require('./app')

const DB_HOST = "mongodb+srv://Olha:xIsGMHvNX04ufdJV@cluster0.btuimfp.mongodb.net/db-contacts?retryWrites=true&w=majority"

mongoose.set('strictQuery', true);
mongoose.connect(DB_HOST)
.then(()=>{
  app.listen(3000)
})
.catch(error => {
  console.log(error.message);
  process.exit(1);
})


