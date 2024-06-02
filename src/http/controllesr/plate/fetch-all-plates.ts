import { FastifyReply, FastifyRequest } from "fastify";
import { makeFetchAvailablePlate } from "src/usecases/factories/make-fetch-plates";

export async function fetchAvailablePlate(req: FastifyRequest, reply: FastifyReply) {
  const fetchPlate = makeFetchAvailablePlate();
  const plates = await fetchPlate.execute();

  return reply
    .status(200)
    .send(plates);
}
