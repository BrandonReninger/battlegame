import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Enemy = new Schema({
    hp: {
        type: Number,
        default: 100
    },
})