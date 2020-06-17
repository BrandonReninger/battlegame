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
    async getAll() {
        let enemies = await dbContext.Enemies.find({

        }) //.populate(
        //"name"
        // );
        return enemies;
    }

    async getById(id, email) {
        let enemy = await dbContext.Enemies.findOne({
            _id: id,
            creatorEmail: email
        })
        if (!enemy) {
            throw new BadRequest("Invalid Id or this is not yours.")
        }
        return enemy
    }

    async delete(id, email) {
        let data = await dbContext.Enemies.findOneAndRemove({
            _id: id,
            creatorEmail: email
        })
        if (!data) {
            throw new BadRequest("Invalid Id or you did not create this character!")
        }
    }
}

export const enemiesService = new EnemiesService();