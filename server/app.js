const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const places = require("./routes/places");
const port = process.env.PORT;

app.use("/api", places);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
