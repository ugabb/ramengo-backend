import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateProtein } from "src/usecases/factories/make-create-protein";
import { z } from "zod";

export async function createProtein(req: FastifyRequest, reply: FastifyReply) {
  const createProteinSchema = z.object({
    description: z.string(),
    imageActive: z.string().url(),
    imageInactive: z.string().url(),
    name: z.string(),
    price: z.number(),
  });

  const { description, imageActive, imageInactive, name, price } =
    createProteinSchema.parse(req.body);

  const createProtein = makeCreateProtein();
  const protein = await createProtein.execute({
    description,
    imageActive,
    imageInactive,
    name,
    price,
  });

  return reply
    .status(201)
    .send({ message: "Protein created successfully", data: protein });
}
