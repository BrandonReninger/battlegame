import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class UsersService {
    async delete(id, userEmail) {
        let user = await dbContext.Users.findOneAndRemove({
            _id: id,
            creatorEmail: userEmail
        })
        if (!user) {
            throw new BadRequest("Invalid Id, this is not you!")
        }
    }
    async getById(id) {
        let user = await dbContext.Users.findOne({
            _id: id
        })
        if (!user) {
            throw new BadRequest("Invalid Id")
        }
        return user
    }
    async create(body) {
        let user = await dbContext.Users.create(body)
        return user
    }
    async edit(id, email, body) {
        let data = await dbContext.Users.findByIdAndUpdate({
            _id: id,
            creatorEmail: email
        }, body, {
            new: true
        })
        if (!data) {
            throw new BadRequest("Invalid Id, this is not you!")
        }
        return data
    }
    async getAll() {
        let users = await dbContext.Users.find()
        return users
    }

}

export const usersService = new UsersService();