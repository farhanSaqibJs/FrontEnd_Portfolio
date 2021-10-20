const mongooose = require("mongoose");
const schema = mongooose.Schema;

const numLikes = schema({
  name: { type: String, required: true },
  cgpa: { type: String, required: true },
  sem: { type: String, required: true },
});

module.exports = mongooose.model("likes", numLikes);
