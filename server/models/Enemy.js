import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Enemy = new Schema({
    name: {
        type: String,
        required: true
    },
    hp: {
        type: Number,
        required: true
    },
    move1: {
        type: String,
        required: true
    },
    move2: {
        type: String,
        required: true
    },
    move3: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    creatorEmail: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

Enemy.virtual("creator", {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
});

export default Enemy;