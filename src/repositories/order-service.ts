import { prisma } from "src/lib/prisma";
import { OrderRepository, OrderResponse } from "./order-repository";

export class OrderService implements OrderRepository {
  async createOrder(
    orderId: number,
    brothId: number,
    proteinId: number,
    description: string,
    image: string
  ): Promise<OrderResponse> {
    const order = await prisma.order.create({
      data: {
        id: Number(orderId),
        description,
        image,
        brothId,
        proteinId,
      },
      include: {
        broth: true,
        protein: true,
      },
    });

    return order;
  }
}
