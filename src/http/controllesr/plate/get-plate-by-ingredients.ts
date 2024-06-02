import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetPlateByIngredients } from "src/usecases/factories/make-get-plate-by-ingredients";
import { z } from "zod";

export async function getPlateByIngredients(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const plateSchema = z.object({
    brothId: z.number(),
    proteinId: z.number(),
  });

  const { brothId, proteinId } = plateSchema.parse(req.body);

  const fetchPlate = makeGetPlateByIngredients();
  const plate = await fetchPlate.execute({ brothId, proteinId });

  return reply.status(200).send(plate);
}
