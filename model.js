const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  name: String,
  profile: String,
  gallary: [String],
});

const UploadModel = mongoose.model("uploadimgs", uploadSchema);
module.exports = UploadModel;
