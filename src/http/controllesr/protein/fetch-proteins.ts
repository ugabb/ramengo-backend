import { FastifyReply, FastifyRequest } from "fastify";
import { makeFetchAvailableProtein } from "src/usecases/factories/make-fetch-proteins";

export async function fetchAvailableProtein(req: FastifyRequest, reply: FastifyReply) {
  const fetchProtein = makeFetchAvailableProtein();
  const proteins = await fetchProtein.execute();

  return reply
    .status(200)
    .send(proteins);
}
