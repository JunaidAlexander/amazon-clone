const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NNjmmJ0xtNaiBrcZUbvoetZ9LqCdCh953sKrBbdZojn8M2TXGodoQW0ZyVXaNx8pjmsSBT5fcHOPizZmGW2wduZ003BmeiOlw"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  const { total } = req.query;
  console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd"
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({
      error: "Failed to create payment intent"
    });
  }
});

// Listen command
exports.api = functions.https.onRequest(app);
