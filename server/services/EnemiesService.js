import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class EnemiesService {
    async create(rawData) {
        let data = await dbContext.Enemies.create(rawData)
        return data
    }
    async getAll(userEmail) {
        let enemies = await dbContext.Enemies.find({
            creatorEmail: userEmail
        }) //.populate(
        //"name"
        // );
        return enemies;
    }
    // async findById(id) {
    //     let enemy = await dbContext.Enemies.findById(id);
    //     if (!enemy) {
    //         throw new BadRequest("Invalid Id");
    //     }
    //     return enemy;
    // }
}

export const enemiesService = new EnemiesService();