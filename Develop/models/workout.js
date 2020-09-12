const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    numExercises: [
        {
            name: {
                type: Number
            },
            type: {
                type: String
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            }
        }]
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


