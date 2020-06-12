import mongoose from "mongoose";
import {
  dbContext
} from "../db/DbContext";

class CleanupService {
  async cleanupAsync() {
    await Promise.allSettled([
      dbContext.Enemies.deleteMany({
        reportedBy: "D$"
      }),
      dbContext.Profile.deleteMany({
        reportedBy: "D$"
      })
    ]);
    return {
      message: "Deleted all test data!"
    };
  }
}

const cleanupService = new CleanupService();
export default cleanupService;