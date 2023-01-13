const express = require("express");
const app = express();
require("dotenv").config();
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const port = process.env.PORT || 3000;
const userRouter = require("./routers/userRoute");
const User = require("./modules/userModule");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/users", userRouter);

app.get("/", async (req, res) => {
  res.send("hi");
});

// ---> Username and password
app.post("/signup", async (req, res) => {
  // check if username and password exist
  if (!req.body.username || !req.body.password) {
    res.send({ message: "Please send the username and password" });
  } else {
    let user = await User.find({ username: req.body.username });
    if (user.length) {
      res.send({ message: "User already exists" });
    } else {
      // hash the password and create user
      bcrypt.hash(req.body.password, 10, function (err, hash) {
        // Store hash in your password DB
        console.log("this is new user's hash:" + hash);
        var newUser = new User({
          username: req.body.username,
          password: hash,
        });
        // save the new user in our DB
        newUser.save();
        res.send({ message: true });
      });
    }
  }
});

app.post("/login", async (req, res) => {
  // Load username and hash from your password DB.
  let user = await User.findOne({ username: req.body.username });
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        res.send({ message: true });
      } else {
        res.send({ message: "wrong password" });
      }
    });
  } else {
    res.send("wrong username");
  }
});

// server listening
app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
