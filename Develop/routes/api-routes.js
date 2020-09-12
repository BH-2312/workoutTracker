const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .sort({ date: 1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(error => {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        });
});

router.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;
    let addedExercise = req.body;
    db.Workout.findByIdAndUpdate(
        id, {
        $push: { exercises: addedExercise },
        $inc: { totalDuration: addedExercise.duration }
    }, {
        new: true
    }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(error => {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    });
});

module.exports = router;