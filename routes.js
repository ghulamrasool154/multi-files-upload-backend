const express = require("express");
const router = express.Router();
const multer = require("multer");
const UploadModel = require("./model");
router.get("/", async (req, res) => {
  const result = await UploadModel.find();
  res.send({
    message: "GET DATA FORM DATABASE",
    totalElement: result.length,
    result,
  });
});

const uploadFiles = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "public/images");
    },
    filename: (req, file, callback) => {
      const uniqueIid = Math.trunc(Math.random() * 1e15);
      callback(null, uniqueIid + "----" + file.originalname);
    },
  }),
});

router.post("/postdata", uploadFiles.array("images"), async (req, res) => {
  const images = [];
  for (var i = 0; i < req.files.length; i++) {
    images.push("images/" + req.files[i].filename);
  }

  const data = await UploadModel.create({
    name: req.body.name,
    profile: images[0],
    gallary: images,
  });
  res.send({
    message: "GET DATA FORM DATABASE",
    result: data,
  });
});
module.exports = router;
