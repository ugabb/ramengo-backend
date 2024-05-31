import { FastifyInstance } from "fastify";
import { createBroth } from "./create-broths";
import { fetchAvailableBroth } from "./fetch-broths";

export async function brothRoutes(app: FastifyInstance){
    app.get("/broths", fetchAvailableBroth)
    app.post("/broths", createBroth)
}