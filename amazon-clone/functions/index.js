

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51NNjmmJ0xtNaiBrcZUbvoetZ9LqCdCh953sKrBbdZojn8M2TXGodoQW0ZyVXaNx8pjmsSBT5fcHOPizZmGW2wduZ003BmeiOlw")


// API

// App config
const app = express();


// Middlewares
app.use(cors({origin: true}));
app.use(express.json()); 

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"))

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;  
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total)

  const paymentIntent = await stripe.paymentIntents.create({amount: total, currency: "usd"});
});

// okay created
res.status(201).send({  
  clientSecret: paymentIntent.client_secret,
})

// Listen command
exports.api = functions.https.onRequest(app);