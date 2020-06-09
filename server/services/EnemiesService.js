import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class EnemiesService {
    async getAll(query = {}) {
        let enemies = await dbContext.Enemies.find(query).populate(
            "name",
            "hp",
            "attacks",
            "picture"
        );
        return enemies;
    }
    async findById(id) {
        let enemy = await dbContext.Enemies.findById(id);
        if (!enemy) {
            throw new BadRequest("Invalid Id");
        }
        return enemy;
    }
}

export const enemiesService = new EnemiesService();