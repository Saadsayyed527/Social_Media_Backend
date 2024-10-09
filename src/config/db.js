const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true); 

mongoose.connect("mongodb+srv://saad123:saad123@cluster0.98a5fer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB:", e);
  });
