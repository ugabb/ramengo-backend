import { FastifyInstance } from "fastify";
import { createProtein } from "./create-protein";
import { fetchAvailableProtein } from "./fetch-proteins";


export async function proteinRoutes(app: FastifyInstance){
    app.get("/proteins", fetchAvailableProtein)
    app.post("/proteins", createProtein)
}