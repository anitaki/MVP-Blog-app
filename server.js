const express=require('express');
const app = express();
require('dotenv').config()
const bodyparser = require('body-parser');
const port=process.env.PORT || 3000;
const userRouter = require('./routers/userRoute');
const User = require("./modules/userModule");
const cors = require("cors");
app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());


app.use( '/users', userRouter );


app.get("/", async (req, res) => {
  res.send('hi')
})

// ---> Username and password
app.post('/signup', async (req,res) => {
  if(!req.body.username || !req.body.password) {
    res.send({message: "Please send the username and password"})
  } else {
    let user = await User.find( {username: req.body.username} )
    if(user.length) {
      res.send({message: "User already exists"})
    } else {
      let newUser = new User({username: req.body.username, password: req.body.password} )
      newUser.save()
      res.send({message : true})
    }
  }
})

// server listening 
app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});