const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const uri = "mongodb+srv://farhansaqib444:o5PHMdg27DzXkKSq@cluster0.exkqu.mongodb.net/test";

const app = express();
const Port = process.env.PORT || 3600;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  return res.json({ message: "Server Running" });
});

app.listen(Port, () => {
  console.log(`Server Running ${Port}`);
});
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

