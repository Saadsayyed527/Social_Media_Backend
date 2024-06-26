const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true); 

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB:", e);
  });
