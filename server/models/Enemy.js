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
    attacks: [{
        type: String,
        required: true
    }],
    pictrue: {
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