const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// require("./connection/conn");

app.use(cors());
app.use(express.json());

// creating Port
app.listen( process.env.PORT || 3000, () => {
    console.log(`Server Started ${process.env.PORT}`);
});