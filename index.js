const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/item");

const app = express();
const port = 3000;

app.use(express.json());
app.use(userRouter);

mongoose.connect("mongodb://127.0.0.1:27017/B", { useNewUrlParser: true, useUnifiedTopology: true,})

.then(() => {
    console.log("connected to the database");
})
.catch((e) => console.log("connection fail"));

app.listen(port, () => {
  console.log("app is start on port ", port);
});
