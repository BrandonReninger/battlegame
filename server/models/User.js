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
})

export default User;