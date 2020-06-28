import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        default: "You"
    },
    hp: {
        type: Number,
        default: 100
    },
    wins: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    }
})

export default User;