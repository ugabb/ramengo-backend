import { FastifyInstance } from "fastify";
import { createPlate } from "./create.plate";
import { fetchAvailablePlate } from "./fetch-all-plates";

export async function plateRoutes(app: FastifyInstance) {
  app.post("/plate", createPlate);
  app.get("/plate", fetchAvailablePlate)
}
