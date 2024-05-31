import { FastifyReply, FastifyRequest } from "fastify";
import { makeFetchAvailableBroth } from "src/usecases/factories/make-fetch-broths";

export async function fetchAvailableBroth(req: FastifyRequest, reply: FastifyReply) {
  const fetchBroth = makeFetchAvailableBroth();
  const broths = await fetchBroth.execute();

  return reply
    .status(200)
    .send(broths);
}
