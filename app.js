const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./config");
const routes = require("./routes");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/", routes);

app.listen("8080", () =>
  console.log("server is running on this port http://localhost:8080/")
);
