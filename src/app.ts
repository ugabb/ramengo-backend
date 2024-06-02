import fastify from "fastify";
import { brothRoutes } from "./http/controllesr/broth/routes";
import { proteinRoutes } from "./http/controllesr/protein/routes";
import { orderRoutes } from "./http/controllesr/order/routes";
import { plateRoutes } from "./http/controllesr/plate/routes";

export const app = fastify();

app.register(brothRoutes)
app.register(proteinRoutes)
app.register(orderRoutes)
app.register(plateRoutes)
