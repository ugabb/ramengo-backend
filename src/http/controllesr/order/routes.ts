import { FastifyInstance } from "fastify";
import { createOrder } from "./create-order";

export async function orderRoutes(app: FastifyInstance) {
  app.post("/order", createOrder);
}
