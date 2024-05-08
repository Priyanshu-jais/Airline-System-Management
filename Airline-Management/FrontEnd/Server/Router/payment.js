
const express = require("express");
const router = express.Router();

const {createOrder,validateOrder} = require("../Controller/paymentController")
router.post("/validateOrder",validateOrder)
router.post("/createOrder",createOrder)
// router.post("/validateOrder",()=>{
//     console.log("hello")
// })

module.exports = router;