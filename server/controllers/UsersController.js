import express from "express";
import BaseController from "../utils/BaseController";
import {
    usersService
} from "../services/UsersService";
import auth0Provider from "@bcwdev/auth0provider";

export class UsersController extends BaseController {
    constructor() {
        super("api/users");
        this.router
            .use(auth0Provider.getAuthorizedUserInfo)
            .get("", this.getAll)
            .put("/:id", this.edit)
    }
    async getAll(req, res, next) {
        try {
            let data = await usersService.getAll()
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            let user = await usersService.edit(req.params.id, req.userInfo.email, req.body)
            return res.send(user)
        } catch (error) {
            next(error)
        }
    }

}