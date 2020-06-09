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
            .use(auth0Provider.getAuthorizedUserInfo)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            return res.send(["value1", "value2"]);
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