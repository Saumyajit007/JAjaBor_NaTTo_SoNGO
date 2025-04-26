const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const dbConnect=require("./db/dbconnect")
const authRoutes=require("./routes/auth/auth-router")

const app = express();  
env.config();
const PORT = process.env.PORT || 8000;

require("./config/passport")

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

app.use(session({
  secret: process.env.MY_SESSION_SECRECT,
  resave: false,
  saveUninitialized: false,
  cookie: {
      httpOnly: true,
      sameSite: 'lax',
      maxAge:1*24*60*60*1000
  }
}));

app.use(passport.initialize()); 
app.use(passport.session())

app.use("/auth",authRoutes)

app.get("/",async (req, res) => {
  res.send(req.isAuthenticated());
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
