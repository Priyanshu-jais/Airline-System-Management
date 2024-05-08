const express = require('express')
const app = express();
const dbConnect =  require("./Config/Database")
const cloudinaryConnect = require("./Config/Cloudinary");
const userRouter = require ("./Router/userRouter")
const flightRouter = require("./Router/flightRoute");
const payment = require("./Router/payment");
require("dotenv").config();
const cors = require('cors');



app.use(cors());
app.use(express.json());
dbConnect();
cloudinaryConnect();

app.use("/api/v1/auth",userRouter)
app.use("/api/v1/flight",flightRouter)
app.use("/api/v1/payment",payment)

app.listen(process.env.PORT ,()=>{
    console.log("Port listening", process.env.PORT)
})
