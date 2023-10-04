require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./Db/connect");
const notFoundMiddleWare = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const authenticateUser = require("./middlewares/authenticate");
const authRoute = require("./routes/auth");
const uploadRoute = require("./routes/upload");

const cors = require("cors");

app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("test");
});
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/upload", uploadRoute);

// //middlewares
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`server is listening on port ${port}`));
};

start();
