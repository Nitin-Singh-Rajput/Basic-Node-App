const express = require("express");
const app = express();
require('dotenv').config();

app.get("/", (req, res) => {
      res.send('Welcome to Basic Node App');
})

app.get("/about", (req, res) => {
    res.send('This is a Basic Node App');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server is running on port: "+PORT);
})