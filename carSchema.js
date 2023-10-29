const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    id: Number,
    Partner: String,
    Name: String,
    Price: String,
    CarUrl: String,
    ImageUrls: String,
    Data: String,
    LeaseType: String,
    Brand: String,
    CarNameFull: String,
  },
  { collection: "Autos" }
);

const Car = mongoose.model("Autos", carSchema);

module.exports = Car;
