import express from "express"

 
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
 
// Application code
const app = express();
app.get('/', (req, res) => {
  var greetStr = 'Hello World';
  console.log('Greeting string :' + greetStr);
  res.send(greetStr);
});
 
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
