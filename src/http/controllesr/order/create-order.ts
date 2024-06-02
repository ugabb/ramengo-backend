import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateOrder } from "src/usecases/factories/make-create-order";
import { z, ZodError } from "zod";

export async function createOrder(req: FastifyRequest, reply: FastifyReply) {
  // Definir o schema de validação usando Zod
  const createOrderSchema = z.object({
    brothId: z.number(),
    proteinId: z.number(),
  });

  try {
    // Validar e analisar o corpo da requisição
    const body = createOrderSchema.parse(req.body);

    // Verificar se brothId e proteinId são válidos
    const { brothId, proteinId } = body;
    if (!brothId || !proteinId) {
      return reply.status(400).send({
        error: "both brothId and proteinId are required",
      });
    }

    // Criar o pedido
    const createOrder = makeCreateOrder();
    const order = await createOrder.execute({
      brothId,
      proteinId,
    });

    // Responder com sucesso
    return reply.status(201).send(order);
  } catch (error) {
    // Lidar com erros de validação
    if (error instanceof ZodError) {
      return reply.status(400).send({
        error: "Invalid request body",
      });
    }

    // Lidar com outros erros
    return reply.status(500).send({
      error: "could not place order",
    });
  }
}
