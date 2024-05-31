import fastify from "fastify";
import { brothRoutes } from "./http/controllesr/broth/routes";
import { proteinRoutes } from "./http/controllesr/protein/routes";

export const app = fastify();

app.register(brothRoutes)
app.register(proteinRoutes)
