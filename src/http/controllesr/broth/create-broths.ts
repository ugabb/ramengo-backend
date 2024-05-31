import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateBroth } from "src/usecases/factories/make-create-broth";
import { z } from "zod";

export async function createBroth(req: FastifyRequest, reply: FastifyReply) {
  const createBrothSchema = z.object({
    description: z.string(),
    imageActive: z.string().url(),
    imageInactive: z.string().url(),
    name: z.string(),
    price: z.number(),
  });

  const { description, imageActive, imageInactive, name, price } =
    createBrothSchema.parse(req.body);

  const createBroth = makeCreateBroth();
  const broth = await createBroth.execute({
    description,
    imageActive,
    imageInactive,
    name,
    price,
  });

  return reply
    .status(201)
    .send({ message: "Broth created successfully", data: broth });
}
