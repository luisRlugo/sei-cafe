const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// This will console log when we are connnected
db.on("connected", () => {
  console.log(`Connected to ${db.name}`);
});
