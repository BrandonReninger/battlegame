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
            .use(auth0Provider.getAuthorizedUserInfo)
            .get("", this.getAll)
            // .get("/:id", this.getById)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            let data = await enemiesService.getAll(req.userInfo.email)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
            req.body.creatorEmail = req.userInfo.email;
            let data = await enemiesService.create(req.body)
            return res.status(201).send(data)
        } catch (error) {
            next(error);
        }
    }
}