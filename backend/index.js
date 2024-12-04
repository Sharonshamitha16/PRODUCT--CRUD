const express = require("express");
const mongoose = require("mongoose");
const connection =require('./src/config/connection')
const cors = require("cors");
const itemRoutes = require("./src/routes/routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
connection()
app.use(cors());
app.use("/api/items", itemRoutes);


app.get("/", (req, res) => res.send("Server is running!"));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
