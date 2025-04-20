const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const dbConnect=require("./db/dbconnect")
const authRoutes=require("./routes/auth/auth-router")
const {myGoogleLoginStrategy}=require("./config/passport")

env.config();
const app = express();  
const PORT = process.env.PORT || 8000;

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORSORIGIN,
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    allowedHeaders: [
      "Content-type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

myGoogleLoginStrategy(passport)

app.use(passport.initialize());

app.use(session({
    secret: process.env.MY_SESSION_SECRECT,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge:24 * 60 * 60 * 1000 },
  }));

app.use("/auth",authRoutes)

app.get("/", (req, res) => {
  return res.send("hi bro");
});

dbConnect.dbConnect().then(
  ()=>{
    app.listen(PORT,()=>{
      console.log(`servver running at port ${PORT}`)
    })
  }
).catch((err)=>{
  console.log(`server starting error:${err}`)
})
