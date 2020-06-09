import mongoose from "mongoose";
import EnemySchema from "../models/Enemy";
import ProfileSchema from "../models/Profile";

class DbContext {
  Enemies = mongoose.model("Enemy", EnemySchema);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();