const express = require("express");
const router = express.Router();
const db = require('../data/dbConfig.js');

router.post("/", (req, res) => {
  const newCar = req.body;

  if (!newCar.vin || !newCar.make || !newCar.model || !newCar.mileage) {
    res.status(400).json({
      errorMessage: "Please provide car vin, make, model, mileage"
    });
  } else {
    db('cars')
      .insert(newCar)
      .then(car => {
        res.status(201).json(car);
      })
      .catch(err => {
        res.status(500).json({
          errorMessage:
            "There was an error while saving the car to the database"
        });
      });
  }
});

router.get("/", (req, res) => {
  db('cars')
    .then(allCars => {
      res.status(200).json(allCars);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not load cars" });
    });
});

module.exports = router;