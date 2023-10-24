import express from "express"

/*
const PORT = 3000
const app = express()

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}..`)
})
*/

'use strict';
 
//const express = require('express');
 
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
 
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
 
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});