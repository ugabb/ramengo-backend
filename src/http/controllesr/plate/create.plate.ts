import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreatePlate } from "src/usecases/factories/make-create-plate";
import { z } from "zod";

export async function createPlate(req: FastifyRequest, reply: FastifyReply) {
  const createPlateSchema = z.object({
    description: z.string(),
    iamge: z.string().url(),
    name: z.string(),
    brothId: z.number(),
    proteinId: z.number(),
  });

  const { description, name, brothId, iamge, proteinId } =
    createPlateSchema.parse(req.body);

  const createPlate = makeCreatePlate();
  const plate = await createPlate.execute({
    description,
    iamge,
    name,
    brothId,
    proteinId,
  });

  return reply
    .status(201)
    .send({ message: "Plate created successfully", data: plate });
}
