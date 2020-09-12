const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0, 
        trim: true
    },
    exercises: [
        {
            name: {
                type: String,
                trim:true,
                required: true

            },
            type: {
                type: String,
                trim:true,
                required: true
            },
            weight: {
                type: Number,
                trim:true,
                required: true
            },
            sets: {
                type: Number,
                trim:true,
                required: true
            },
            reps: {
                type: Number,
                trim:true,
                required: true
            },
            duration: {
                type: Number,
                trim:true,
                required: true
            }
        }]
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


