import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class UsersService {
    async edit(id, email, body) {
        let data = await dbContext.Users.findByIdAndUpdate({
            _id: id,
            creatorEmail: email
        }, body)
    }
    async getAll() {
        let users = await dbContext.Users.find()
        return users
    }

}

export const usersService = new UsersService();