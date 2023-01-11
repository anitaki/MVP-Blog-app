const express=require('express');
const app = express();
require('dotenv').config()
const port = process.env.API_PORT;
const bodyparser = require('body-parser');

app.use(express.json());

app.get("/", async (req, res) => {
  res.send('hi')
})

// server listening 
app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});