const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Car = require("./carSchema"); 
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Hallo");
});

app.get("/api/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    if (cars.length === 0) {
      console.log("No cars found in the 'Autos' collection.");
    }
    res.json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
