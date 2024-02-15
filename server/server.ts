const express = require("express");
const connectDB = require("./config/db.ts");
const app = express();
const PORT = 5000;

connectDB();

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server is running");
})

export {};