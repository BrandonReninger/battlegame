import mongoose from "mongoose";
import EnemySchema from "../models/Enemy";
import ProfileSchema from "../models/Profile";
import UserSchema from "../models/User";

class DbContext {
  Enemies = mongoose.model("Enemy", EnemySchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Users = mongoose.model("User", UserSchema);
}

export const dbContext = new DbContext();