require("dotenv").config();
require("express-async-errors");
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./Db/connect");
const cors = require("cors");
const trackRouter = require("./routes/track");
const albumRouter = require("./routes/album");
const userRouter = require("./routes/user");
const uploadRouter = require("./routes/upload");
const uploadSingleMusicRouter = require("./routes/singleMusicUpload");
const uploadMultipleMusiceRouter = require("./routes/multipleMusicUpload");
const uploadAlbumImageRouter = require("./routes/uploadAlbumImage");
const notFoundMiddleWare = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/public/assets"));

app.use("/api/v1/track", trackRouter);
app.use("/api/v1/album", albumRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/upload", uploadRouter);
app.use("/api/v1/uploadsinglemusic", uploadSingleMusicRouter);
app.use("/api/v1/multiplemusicupload", uploadMultipleMusiceRouter);
app.use("/api/v1/uploadalbumimage", uploadAlbumImageRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3001;
const start = async () => {
  await connectDB(process.env.MONGO_ATLAT_URL);
  app.listen(port, () => console.log(`server is listening on port ${port}`));
};

start();
