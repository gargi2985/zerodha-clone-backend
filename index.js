require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
//   mongoose.connect(url, {
//     ssl:true,
//     tls:true,
//     tlsVersion:"Tlsv1.2",
//     sslValidate:false,
//   })
   mongoose.connect(url)
 .then(() => {
  console.log("DB is connected!");
    app.listen(PORT, () => {
      console.log(`App Started!`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// app.listen(PORT,()=>{
//     console.log("App Started!");
//     // mongoose.connect(url);
//     // console.log("DB is connected!");
// });

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');

// const PORT = process.env.PORT || 3002;
// const url = process.env.MONGO_URL;

// const app = express();

// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('DB is connected!');
//     app.listen(PORT, () => {
//       console.log(`App Started!`);
//     });
//   })
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//   });

// // You can remove or comment out these lines as the server start is now inside the .then() block
// // app.listen(PORT, () => {
// //   console.log("App Started!");
// // });
// // mongoose.connect(url);
// // console.log("DB is connected!");