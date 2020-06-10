import express from "express";
import BaseController from "../utils/BaseController";
import {
    enemiesService
} from "../services/EnemiesService";
import auth0Provider from "@bcwdev/auth0provider";

export class EnemiesController extends BaseController {
    constructor() {
        super("api/enemies");
        this.router
            .get("", this.getAll)
            // .get("/:id", this.getById)
            .use(auth0Provider.getAuthorizedUserInfo)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            let data = await enemiesService.getAll()
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
            req.body.creator = req.user.email;
            res.send(req.body);
        } catch (error) {
            next(error);
        }
    }
}