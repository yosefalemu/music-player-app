require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./Db/connect");
const cors = require("cors");
const trackRouter = require("./routes/track");
const albumRouter = require("./routes/album");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/public/assets/images"));

app.use("/api/v1/track", trackRouter);
app.use("/api/v1/album", albumRouter);

const port = process.env.PORT || 3001;
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`server is listening on port ${port}`));
};

start();
