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
            .get("/:id", this.getById)
            .post("", this.create)
            .delete("/:id", this.delete)
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

    async getById(req, res, next) {
        try {
            let data = await usersService.getById(req.params.id)
            return res.send(data)
        } catch (error) {
            console.error(error)
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

    async create(req, res, next) {
        try {
            let user = await usersService.create(req.body)
            res.send(user)
        } catch (error) {
            console.error(error)
        }
    }

    async delete(req, res, next) {
        try {
            let user = await usersService.delete(req.params.id, req.userInfo.email)
            res.send("deleted!")
        } catch (error) {
            console.error(error)
        }
    }

}