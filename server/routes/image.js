const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.post("/upload",single('avatar'), (res, req) => {
  console.log("req.file", req.file);

  // fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));
  // res.send("image uploaded !!!");
});

module.exports = router;

