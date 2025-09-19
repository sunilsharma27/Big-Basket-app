const express = require('express');
const app = express();
// const port = 3000
const dotenv =require('dotenv');
const mongoose = require('mongoose');
const cors = require("cors");
// set for env variables
dotenv.config({
  path:"./.env",
});
//  configure cors
app.use(cors());
// middleware to parse json request
app.use(express.json())
let Hostname = process.env.Hostname;
let Port = process.env.Port;
console.log(Hostname)
console.log(Port)

 app.get('/', (req, res) => {
  res.send('Hello anand')
});
// used to connect mongodb with express
mongoose.connect(process.env.Mongo_URL).then(()=>{
  console.log("mongo db connected succefully")
}).catch((err)=>{
  console.log("Mongo db connected failed",err)
});
// Importing router
app.use("/api",require("./router/Productrouter"))

app.listen(Port, Hostname, () => {
  console.log(`Example app listening on port ${Port}`)
  console.log(` Server is listening on port http://${Hostname}:${Port}`)
})